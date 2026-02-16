const { Sequelize } = require("sequelize");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const databaseUrl = process.env.DATABASE_URL;

let sequelize;

if (databaseUrl) {
    // 🔥 Production (Render + Supabase)
    console.log("Connecting to PostgreSQL...");

    sequelize = new Sequelize(databaseUrl, {
        dialect: "postgres",
        logging: false,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false, // ✅ Fix for self-signed certificate
            },
        },
    });
} else {
    // 🟢 Local Development (SQLite)
    console.log("Connecting to local SQLite...");

    sequelize = new Sequelize({
        dialect: "sqlite",
        storage: path.join(__dirname, "database.sqlite"),
        logging: false,
    });
}

module.exports = sequelize;
