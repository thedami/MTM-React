const Sequelize = require('sequelize');
const db = require('../config/database');


const AManager = db.define('aManager',{
    AManagerID: { type: Sequelize.INTEGER, primaryKey:true, autoIncrement:true, allowNull: false },
    LastName: { type: Sequelize.STRING, allowNull: false, validate: {isAlpha: true} },
    FirstName: { type: Sequelize.STRING, allowNull: false, validate: {isAlpha: true}},
    AsstID: { type: Sequelize.INTEGER, allowNull: true, validate: {isInt: true}},
});

module.exports = AManager;