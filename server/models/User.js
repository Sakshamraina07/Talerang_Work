const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /^[0-9]{10}$/ // Simple 10 digit validation
        }
    },
    clientReferred: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'NA'
    },
    loginTime: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

module.exports = User;
