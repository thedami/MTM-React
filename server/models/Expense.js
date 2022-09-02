const Sequelize = require('sequelize');
const db = require('../config/database');

const Expense = db.define('expense',{
    ExpenseID: { type: Sequelize.INTEGER, primaryKey:true, autoIncrement:true, allowNull: false},
    Description: { type: Sequelize.STRING, allowNull: false, validate: {is: "[^0-9]" }},
    Amount: { type: Sequelize.INTEGER, allowNull: false, validate: {isInt: true}},
    IncuredBy: {type: Sequelize.STRING, allowNull: false, validate: {is: "[^0-9]"}}
}); 
module.exports = Expense;