const { Sequelize } = require('sequelize');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

// Check for DATABASE_URL environment variable (Provided by Render/Vercel/Neon)
console.log("Loading .env from:", path.join(__dirname, '../.env'));
const databaseUrl = process.env.DATABASE_URL;
console.log("DATABASE_URL found:", !!databaseUrl);
if (databaseUrl) console.log("DATABASE_URL starts with:", databaseUrl.substring(0, 10));

let sequelize;

if (databaseUrl) {
    // Production: Use PostgreSQL
    console.log("Connecting to PostgreSQL...");
    sequelize = new Sequelize(databaseUrl, {
        dialect: 'postgres',
        protocol: 'postgres',
        logging: false,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false // Required for many cloud databases (Neon, Render)
            }
        }
    });
} else {
    // Development: Use SQLite (Local file)
    console.log("Connecting to Local SQLite...");
    sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: path.join(__dirname, 'database.sqlite'),
        logging: false
    });
}

module.exports = sequelize;
