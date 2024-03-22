const { DataTypes } = require('sequelize');
const sequelize = require('../connection/database');
const Account = require('./Account');
const Combinations = require('./Combinations');

const Session = sequelize.define('Session', {
    sequence: {
        type: DataTypes.JSONB,
        allowNull: false
    }
});

Session.belongsTo(Account)
Session.belongsTo(Combinations)

module.exports = Session;