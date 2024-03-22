const { DataTypes } = require('sequelize');
const sequelize = require('../connection/database');

const Account = sequelize.define('Account', {
    code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Account;
