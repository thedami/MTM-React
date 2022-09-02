const ArtistDao = require('../dao/artist.dao');
const {validationResult} = require('express-validator');

var ArtistController = {
    addArtist: addArtist,
    findArtist: findArtist,
    findArtistByID: findArtistByID,
    updateArtist: updateArtist,
    deleteById: deleteById
}

function addArtist(req, res) {
    let artist = req.body;

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors);
        return res.status(422).json({errors: errors.array()})
    }

    ArtistDao.create(artist).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findArtistByID(req, res) {
    ArtistDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    ArtistDao.deleteById(req.params.id).
        then((data) => {
            res.status(204).json({
                message: "Artist deleted successfully"
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateArtist(req, res) {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors);
        return res.status(422).json({errors: errors.array()})
    }
    ArtistDao.updateArtist(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Artist updated successfully"
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findArtist(req, res) {
    ArtistDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = ArtistController;
