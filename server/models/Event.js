const Sequelize = require('sequelize');
const db = require('../config/database');


const Event = db.define('event', {
    EventID: {type: Sequelize.INTEGER, primaryKey:true, autoIncrement:true, allowNull: false},
    Description: { type: Sequelize.STRING, allowNull: false, validate: {is: "[^0-9]"}},
    Date: { type: Sequelize.DATEONLY, allowNull: false, validate: {isDate: true}},
    Time: {type: Sequelize.STRING, allowNull: false},
    Venue: {type: Sequelize.STRING, allowNull: false, validate: {is: "[^0-9]"}},
    Country: {type: Sequelize.STRING, allowNull: false, validate: {isAlpha: true}},
    Address: {type: Sequelize.STRING, allowNull: false, validate: {is: "[^0-9]"}}
});
module.exports = Event;