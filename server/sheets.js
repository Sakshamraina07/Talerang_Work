const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');
const fs = require('fs');
const path = require('path');

// The Sheet ID provided by the user
const SHEET_ID = '1DfLdFRdJhbFTzvDGMrSM-B81cTgv2348lyfj7RPnfeI';

const syncToSheets = async (users) => {
    const credentialsPath = path.join(__dirname, 'credentials.json');

    // 1. Check for credentials
    if (!fs.existsSync(credentialsPath)) {
        throw new Error('credentials.json not found. Please add your Service Account key to the server folder.');
    }

    const creds = require(credentialsPath);

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

    // 5. Prepare Data
    const rows = users.map(user => {
        let totalScore = 0;
        let completedModules = 0;
        const moduleScores = {};

        // Initialize all module scores to 0
        modules.forEach(m => moduleScores[m.title] = 0);

        // Calculate score
        if (user.ModuleProgresses) {
            user.ModuleProgresses.forEach(mp => {
                const foundModule = modules.find(m => m.id === mp.moduleId);
                // If we know the module title, save the score under that title
                if (foundModule) {
                    moduleScores[foundModule.title] = mp.score || 0;
                }

                totalScore += (mp.score || 0);
                if (mp.status === 'completed') completedModules++;
            });
        }

        return {
            Name: user.name,
            Email: user.email,
            Phone: user.phone,
            'Login Time': user.loginTime ? new Date(user.loginTime).toLocaleString() : '',
            ...moduleScores, // Spread individual module scores here
            'Total Score': totalScore,
            'Completed Modules': completedModules,
        };
    });

    // 6. Write Headers & Rows
    await sheet.clear(); // Clear old data

    // Construct Headers dynamically
    const headers = ['Name', 'Email', 'Phone', 'Login Time', ...modules.map(m => m.title), 'Total Score', 'Completed Modules'];

    await sheet.setHeaderRow(headers);
    await sheet.addRows(rows);

    return { title: doc.title, rowCount: rows.length };
};

module.exports = { syncToSheets };
