const { DataTypes } = require('sequelize');
const sequelize = require('../connection/database');

const Account = sequelize.define('Account', {
    code: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Account;
