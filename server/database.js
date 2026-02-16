const { Sequelize } = require("sequelize");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const databaseUrl = process.env.DATABASE_URL;

let sequelize;

if (databaseUrl) {
    console.log("🔥 Connecting to PostgreSQL (Supabase Pooler)...");

    sequelize = new Sequelize(databaseUrl, {
        dialect: "postgres",
        logging: false,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false, // ✅ allows self-signed cert (Supabase fix)
            },
        },
    });
} else {
    console.log("🟢 Connecting to local SQLite...");

    sequelize = new Sequelize({
        dialect: "sqlite",
        storage: path.join(__dirname, "database.sqlite"),
        logging: false,
    });
}

module.exports = sequelize;
