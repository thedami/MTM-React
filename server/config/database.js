const { Sequelize } = require('sequelize');
const db = new Sequelize('MTM', 'damilare', 'damilare', {
    host: 'DAMI-PC',
    dialect: 'mssql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = db;