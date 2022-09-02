const Sequelize = require('sequelize');
const db = require('../config/database');

const Recommendation = db.define('recommendation',{
    RecommendationID: { type: Sequelize.INTEGER, primaryKey:true, autoIncrement:true, allowNull: false},
    Description: { type: Sequelize.STRING, allowNull: false, validate: {is: "[^0-9]"}},
    DateReceived: { type: Sequelize.DATEONLY, allowNull: false, validate: {isDate: true}},
});
module.exports = Recommendation;