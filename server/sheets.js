const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');
const fs = require('fs');
const path = require('path');

// The Sheet ID provided by the user
const SHEET_ID = '1DfLdFRdJhbFTzvDGMrSM-B81cTgv2348lyfj7RPnfeI';

const syncToSheets = async (users) => {
    const credentialsPath = path.join(__dirname, 'credentials.json');
    let creds;

    // 1. Load Credentials (Env Variable OR File)
    if (process.env.GOOGLE_CREDENTIALS) {
        try {
            creds = JSON.parse(process.env.GOOGLE_CREDENTIALS);
        } catch (error) {
            console.error("Failed to parse GOOGLE_CREDENTIALS env var:", error);
        }
    }

    if (!creds && fs.existsSync(credentialsPath)) {
        creds = require(credentialsPath);
    }

    if (!creds) {
        throw new Error('Google Credentials not found. Set GOOGLE_CREDENTIALS env var OR add credentials.json');
    }

    // 2. Auth
    const serviceAccountAuth = new JWT({
        email: creds.client_email,
        key: creds.private_key,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(SHEET_ID, serviceAccountAuth);

    // 3. Load Info
    await doc.loadInfo();

    // 4. Get or Create Sheet
    let sheet = doc.sheetsByIndex[0]; // Default to first sheet

    // Define Modules to ensure order in columns
    const modules = [
        { id: 'module_1a', title: 'Milestone Activity' },
        { id: 'module_1b', title: 'Starbucks Case Study' },
        { id: 'module_2', title: 'Life Vision Session' },
        { id: 'module_3a', title: 'Elevator Pitch' },
        { id: 'module_3b', title: 'Cover Letter' },
        { id: 'module_4a', title: 'Ethics' },
        { id: 'module_4b', title: 'Planner' },
        { id: 'module_4c', title: 'Problem Solving' },
        { id: 'module_5', title: 'Etiquette' },
        { id: 'module_6', title: 'Final Skills' }
    ];

    // 6. Sync Logic (Update existing, Append new)

    // Ensure headers exist
    const headers = ['Name', 'Email', 'Phone', 'Referral', 'Login Time', ...modules.map(m => m.title), 'Total Score', 'Completed Modules'];
    try {
        await sheet.loadHeaderRow(); // Try loading existing headers
        // Check if our new header exists, if not, update the whole header row
        const currentHeaders = sheet.headerValues;
        if (!currentHeaders.includes('Referral')) {
            await sheet.setHeaderRow(headers);
        }
    } catch (e) {
        // If sheet is empty or has no headers, set them
        await sheet.setHeaderRow(headers);
    }

    const existingRows = await sheet.getRows();
    const emailToRowMap = new Map();

    existingRows.forEach(row => {
        const email = row.get('Email');
        if (email) {
            // Normalize email for comparison
            emailToRowMap.set(email.toLowerCase().trim(), row);
        }
    });

    const newRows = [];

    for (const user of users) {
        if (!user.email) continue;
        const normalizedEmail = user.email.toLowerCase().trim();

        // Calculate Data
        let totalScore = 0;
        let completedModules = 0;
        const moduleScores = {};

        // Initialize scores
        modules.forEach(m => moduleScores[m.title] = 0);

        if (user.ModuleProgresses) {
            user.ModuleProgresses.forEach(mp => {
                const foundModule = modules.find(m => m.id === mp.moduleId);
                if (foundModule) {
                    moduleScores[foundModule.title] = mp.score || 0;
                }
                totalScore += (mp.score || 0);
                if (mp.status === 'completed') completedModules++;
            });
        }

        const userData = {
            Name: user.name,
            Email: user.email, // Keep original casing for display
            Phone: user.phone,
            'Referral': user.clientReferred || 'NA',
            'Login Time': user.loginTime ? new Date(user.loginTime).toLocaleString() : '',
            ...moduleScores,
            'Total Score': totalScore,
            'Completed Modules': completedModules,
        };

        if (emailToRowMap.has(normalizedEmail)) {
            // Update Existing Row
            const row = emailToRowMap.get(normalizedEmail);
            row.assign(userData);
            await row.save(); // Save individual row update
        } else {
            // Prepare for Bulk Insert
            newRows.push(userData);
            // Add to map to prevent duplicates within the same batch if any
            emailToRowMap.set(normalizedEmail, true);
        }
    }

    // Append new users
    if (newRows.length > 0) {
        await sheet.addRows(newRows);
    }

    return { title: doc.title, rowCount: users.length };
};

module.exports = { syncToSheets };
