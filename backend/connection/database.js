const Sequelize = require('sequelize');

const sequelize = new Sequelize('bank_authenticator', 'admin', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;