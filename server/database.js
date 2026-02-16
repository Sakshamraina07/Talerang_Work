const { Sequelize } = require('sequelize');
const path = require('path');

// Check for DATABASE_URL environment variable (Provided by Render/Vercel/Neon)
const databaseUrl = process.env.DATABASE_URL;

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
