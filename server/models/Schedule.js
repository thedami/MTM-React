const Sequelize = require('sequelize');
const db = require('../config/database');


const Schedule = db.define('schedule', {
    ScheduleID: { type: Sequelize.INTEGER, primaryKey:true, autoIncrement:true, allowNull: false},
    EventID: { type: Sequelize.INTEGER, allowNull: false, validate: {isInt: true}},
    ArtistID: { type: Sequelize.INTEGER, allowNull: false, validate: {isInt: true}},
    Date: {type: Sequelize.DATEONLY, allowNull: false, validate: {isDate:true}}
});
module.exports = Schedule;