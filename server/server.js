const express = require('express');
const cors = require('cors');
const sequelize = require('./database');
const User = require('./models/User');
const ModuleProgress = require('./models/ModuleProgress');
const xlsx = require('xlsx');
const { syncToSheets } = require('./sheets');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

/* ---------------- ROOT ROUTE ---------------- */
app.get("/", (req, res) => {
    res.send("🚀 Talerang Backend is running successfully!");
});

/* ---------------- DATABASE SYNC ---------------- */
sequelize.sync({ alter: true })
    .then(() => {
        console.log('✅ Database & tables synced!');
    })
    .catch(err => {
        console.error("❌ Database sync error:", err);
    });

/* ---------------- AUTO SYNC FUNCTION ---------------- */
const triggerAutoSync = async () => {
    try {
        const users = await User.findAll({
            include: [ModuleProgress],
            order: [['loginTime', 'DESC']]
        });

        await syncToSheets(users);
        console.log("✅ Auto-sync completed.");
    } catch (err) {
        console.error("❌ Auto-sync failed:", err.message);
    }
};

/* ========================= ROUTES ========================= */

/* -------- 1. LOGIN / REGISTER -------- */
app.post('/api/auth/login', async (req, res) => {
    try {
        const { name, email, phone } = req.body;

        const [user, created] = await User.findOrCreate({
            where: { email },
            defaults: { name, phone, loginTime: new Date() }
        });

        if (!created) {
            user.loginTime = new Date();
            await user.save();
        }

        triggerAutoSync();

        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

/* -------- 2. GET USER PROGRESS -------- */
app.get('/api/user/:userId/progress', async (req, res) => {
    try {
        const userExists = await User.findByPk(req.params.userId);
        if (!userExists) {
            return res.status(404).json({ error: "User not found" });
        }

        const progress = await ModuleProgress.findAll({
            where: { userId: req.params.userId }
        });

        const progressMap = {
            status: {},
            scores: {}
        };

        progress.forEach(p => {
            progressMap.status[p.moduleId] = p.status;
            progressMap.scores[p.moduleId] = p.score;
        });

        res.json(progressMap);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

/* -------- 3. UPDATE QUIZ PROGRESS -------- */
app.post('/api/quiz/progress', async (req, res) => {
    try {
        const { userId, moduleId, score, status } = req.body;

        const [progress, created] = await ModuleProgress.findOrCreate({
            where: { userId, moduleId },
            defaults: { score, status }
        });

        if (!created) {
            if (score !== undefined) progress.score = score;
            if (status !== undefined) progress.status = status;
            await progress.save();
        }

        triggerAutoSync();

        res.json({ success: true, progress });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

/* ========================= ADMIN ROUTES ========================= */

/* -------- 4. GET ALL USERS -------- */
app.get('/api/admin/users', async (req, res) => {
    try {
        const users = await User.findAll({
            include: [ModuleProgress],
            order: [['loginTime', 'DESC']]
        });

        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

/* -------- 5. EXPORT EXCEL -------- */
app.get('/api/admin/export', async (req, res) => {
    try {
        const users = await User.findAll({
            include: [ModuleProgress],
            order: [['loginTime', 'DESC']]
        });

        const data = users.map(user => {
            const row = {
                Name: user.name,
                Email: user.email,
                Phone: user.phone,
                LoginTime: user.loginTime
            };

            let totalScore = 0;
            let completedModules = 0;

            user.ModuleProgresses.forEach(mp => {
                row[`${mp.moduleId} Score`] = mp.score;
                totalScore += mp.score || 0;

                if (mp.status === 'completed') {
                    completedModules++;
                }
            });

            row['Total Score'] = totalScore;
            row['Completed Modules'] = completedModules;

            return row;
        });

        const workbook = xlsx.utils.book_new();
        const worksheet = xlsx.utils.json_to_sheet(data);

        xlsx.utils.book_append_sheet(workbook, worksheet, "Users");

        const buffer = xlsx.write(workbook, {
            type: 'buffer',
            bookType: 'xlsx'
        });

        res.setHeader(
            'Content-Disposition',
            'attachment; filename="Talerang_Users.xlsx"'
        );

        res.type(
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        );

        res.send(buffer);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

/* -------- 6. MANUAL GOOGLE SHEETS SYNC -------- */
app.post('/api/admin/sync-sheets', async (req, res) => {
    try {
        const users = await User.findAll({
            include: [ModuleProgress],
            order: [['loginTime', 'DESC']]
        });

        const result = await syncToSheets(users);

        res.json({
            success: true,
            message: `Synced ${result.rowCount} users to "${result.title}"`
        });

    } catch (error) {
        console.error("Sheet Sync Error:", error);
        res.status(500).json({ error: error.message });
    }
});

/* ========================= START SERVER ========================= */
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
