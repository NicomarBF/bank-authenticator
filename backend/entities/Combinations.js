const { DataTypes } = require('sequelize');
const sequelize = require('../connection/database');

const Combinations = sequelize.define('Combinations', {
    combinations: {
        type: DataTypes.JSONB,
        allowNull: false
    }
});

module.exports = Combinations;