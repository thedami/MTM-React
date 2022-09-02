const Sequelize = require('sequelize');
const db = require('../config/database');

const Artist = db.define('artist',{  
    ArtistID: { type: Sequelize.INTEGER, primaryKey:true, autoIncrement:true, allowNull: false  },
    LastName: { type: Sequelize.STRING, allowNull: false, validate: {isAlpha: true }},
    FirstName: { type: Sequelize.STRING, allowNull: false, validate: {isAlpha: true} },
    Gender: { type: Sequelize.STRING, allowNull: false},
    Address: {type: Sequelize.STRING, allowNull: true, validate: {is: "[^0-9]"}},
    Telephone: {type: Sequelize.INTEGER, allowNull: false, validate: {isInt: true}},
    Email: { type: Sequelize.STRING, allowNull: false},
    AManagerID: { type: Sequelize.INTEGER, allowNull: true, validate: {isInt: true} },
});  
module.exports = Artist;