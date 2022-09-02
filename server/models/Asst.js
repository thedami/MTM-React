const Sequelize = require('sequelize');
const db = require('../config/database');

const Asst= db.define('asst', {
    AsstID: { type: Sequelize.INTEGER, primaryKey:true, autoIncrement:true, allowNull: false },
    LastName: { type: Sequelize.STRING, allowNull: false, validate: {is: "[^0-9]"}},
    FirstName: { type: Sequelize.STRING, allowNull: false, validate: {isAlpha: true}},
}); 
module.exports = Asst;