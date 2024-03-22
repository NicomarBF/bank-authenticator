const Sequelize = require('sequelize');

const sequelize = new Sequelize('bank_authenticator', 'admin', 'admin', {
    host: 'localhost',
    port: 5431,
    dialect: 'postgres'
});

module.exports = sequelize;