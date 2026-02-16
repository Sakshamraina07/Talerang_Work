const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./User');

const ModuleProgress = sequelize.define('ModuleProgress', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    moduleId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    score: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    status: {
        type: DataTypes.ENUM('locked', 'active', 'completed'),
        defaultValue: 'locked'
    }
});

// Define Relationship
User.hasMany(ModuleProgress, { foreignKey: 'userId', onDelete: 'CASCADE' });
ModuleProgress.belongsTo(User, { foreignKey: 'userId' });

module.exports = ModuleProgress;
