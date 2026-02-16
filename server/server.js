process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const express = require('express');
const cors = require('cors');
const sequelize = require('./database');
const User = require('./models/User');
const ModuleProgress = require('./models/ModuleProgress');
const xlsx = require('xlsx');
const { syncToSheets } = require('./sheets');

// Helper for Auto-Sync
const triggerAutoSync = async () => {
    try {
        const users = await User.findAll({
            include: [ModuleProgress],
            order: [['loginTime', 'DESC']]
        });
        await syncToSheets(users);
        console.log("Auto-sync completed.");
    } catch (err) {
        console.error("Auto-sync failed:", err.message);
    }
};

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Sync Database
sequelize.sync({ alter: true }).then(() => {
    console.log('Database & tables created!');
});

// --- ROUTES ---

// 1. Auth / Register
app.post('/api/auth/login', async (req, res) => {
    try {
        const { name, email, phone } = req.body;

        // Find or Create User
        const [user, created] = await User.findOrCreate({
            where: { email },
            defaults: { name, phone }
        });

        // Update login time if exists
        if (!created) {
            user.loginTime = new Date();
            user.loginTime = new Date();
            await user.save();
        }

        // Trigger Auto-Sync
        triggerAutoSync();

        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 2. Get User Progress
app.get('/api/user/:userId/progress', async (req, res) => {
    try {
        const userExists = await User.findByPk(req.params.userId);
        if (!userExists) {
            return res.status(404).json({ error: "User not found" });
        }

        const progress = await ModuleProgress.findAll({ where: { userId: req.params.userId } });

        // Convert array to object map for frontend
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
        res.status(500).json({ error: error.message });
    }
});

// 3. Update Module Progress
app.post('/api/quiz/progress', async (req, res) => {
    try {
        const { userId, moduleId, score, status } = req.body;

        // Upsert Progress
        const [progress, created] = await ModuleProgress.findOrCreate({
            where: { userId, moduleId },
            defaults: { score, status }
        });

        if (!created) {
            progress.score = score !== undefined ? score : progress.score;
            progress.status = status !== undefined ? status : progress.status;
            progress.status = status !== undefined ? status : progress.status;
            await progress.save();
        }

        // Trigger Auto-Sync
        triggerAutoSync();

        res.json({ success: true, progress });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// --- ADMIN ROUTES ---

// 4. Get All Users with Progress
app.get('/api/admin/users', async (req, res) => {
    try {
        const users = await User.findAll({
            include: [ModuleProgress],
            order: [['loginTime', 'DESC']]
        });
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 5. Export Excel
app.get('/api/admin/export', async (req, res) => {
    try {
        const users = await User.findAll({
            include: [ModuleProgress],
            order: [['loginTime', 'DESC']]
        });

        // Flatten Data
        const data = users.map(user => {
            const row = {
                Name: user.name,
                Email: user.email,
                Phone: user.phone,
                LoginTime: user.loginTime
            };

            let totalScore = 0;
            let completedModules = 0;

            // Add scores for each module (dynamically if needed, or fixed columns)
            // Assuming known module IDs or just dumping all found
            user.ModuleProgresses.forEach(mp => {
                row[`${mp.moduleId} Score`] = mp.score;
                totalScore += mp.score;
                if (mp.status === 'completed') completedModules++;
            });

            row['Total Score'] = totalScore;

            // Simple approximate completion
            // For accurate %, we need total modules count. Assuming 8 modules from quizData.js context
            // Or just export raw counts
            row['Completed Modules'] = completedModules;

            return row;
        });

        const mb = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(mb, ws, "Users");

        const buffer = xlsx.write(mb, { type: 'buffer', bookType: 'xlsx' });

        res.setHeader('Content-Disposition', 'attachment; filename="Talerang_Users.xlsx"');
        res.type('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.send(buffer);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 6. Sync to Google Sheets
// 6. Sync to Google Sheets
// const { syncToSheets } = require('./sheets'); // Moved to top
app.post('/api/admin/sync-sheets', async (req, res) => {
    try {
        // Fetch fresh data
        const users = await User.findAll({
            include: [ModuleProgress],
            order: [['loginTime', 'DESC']]
        });

        const result = await syncToSheets(users);
        res.json({ success: true, message: `Synced ${result.rowCount} users to "${result.title}"` });
    } catch (error) {
        console.error("Sheet Sync Error:", error);
        res.status(500).json({ error: error.message });
    }
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
