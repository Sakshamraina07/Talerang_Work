const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "postgres",                         // database
    "postgres.aiqplcebmybwlsamqbzi",     // username
    "Sakshamraina@123",                 // original password (NOT encoded here)
    {
        host: "aws-1-ap-southeast-1.pooler.supabase.com",
        port: 5432,
        dialect: "postgres",
        logging: false,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    }
);

module.exports = sequelize;
