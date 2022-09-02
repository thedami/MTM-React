const Artist = require('../models/artist');
var ArtistDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateArtist: updateArtist
}

function findAll() {
    return Artist.findAll();
}

function findById(ArtistID) {
    return Artist.findByPk(ArtistID);
}

function deleteById(ArtistID) {
    return Artist.destroy({ where: { ArtistID: ArtistID } });
}

function create(artist) {
    var newArtist = new Artist(artist);
    return newArtist.save();
}

function updateArtist(artist, ArtistID) {
    var updateArtist = {
        LastName: artist.LastName,
        FirstName: artist.FirstName,
        Gender: artist.Gender,
        Address: artist.Address,
        Telephone: artist.Telephone,
        Email: artist.Email,
        AManagerID: artist.AManagerID
    };
    return Artist.update(updateArtist, { where: { ArtistID: ArtistID } });
}
module.exports = ArtistDao;