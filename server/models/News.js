const Sequelize = require('sequelize');
const db = require('../config/database');


const News = db.define('news', {
    NewsID: { type: Sequelize.INTEGER, primaryKey:true, autoIncrement:true, allowNull: false},
    Source: { type: Sequelize.STRING, allowNull: false, validate: {is: "[^0-9]"}},
    Contents: { type: Sequelize.STRING, allowNull: false, validate: {is: "[^0-9]"}},
    ArtistID: {type: Sequelize.INTEGER, allowNull: false, validate: {isInt: true}}
});
module.exports = News;