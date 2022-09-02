const Sequelize = require('sequelize');
const db = require('../config/database');


const Contract = db.define('contract', {
    ContractID: { type: Sequelize.INTEGER, primaryKey:true, autoIncrement:true, allowNull: false },
    StartDate: { type: Sequelize.DATEONLY, allowNull: false, validate: {isDate: true}},
    EndDate: { type: Sequelize.DATEONLY, allowNull: false, validate: {isDate: true}},
    RoyaltyPercentage: {type: Sequelize.INTEGER, allowNull: false, validate: {isInt: true}},
    ContractTerms: {type: Sequelize.STRING, allowNull: false, validate: {is: "[^0-9]"}}
}); 
module.exports = Contract;