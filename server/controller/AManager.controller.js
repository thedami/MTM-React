const AManagerDao = require('../dao/AManager.dao');
const {validationResult} = require('express-validator');

var AManagerController = {
    addAManager: addAManager,
    findAManager: findAManager,
    findAManagerByID: findAManagerByID,
    updateAManager: updateAManager,
    deleteById: deleteById
}

function addAManager(req, res) {
    let aManager = req.body;

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        consle.log(errors);
        return res.status(422).json({errors: errors.array()})
    }

    AManagerDao.create(aManager).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findAManagerByID(req, res) {
    AManagerDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    AManagerDao.deleteById(req.params.id).
        then((data) => {
            res.status(204).json({
                message: "Artist Manager deleted successfully"
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateAManager(req, res) {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        consle.log(errors);
        return res.status(422).json({errors: errors.array()})
    }
    AManagerDao.updateAManager(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Artist Manager updated successfully"
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findAManager(req, res) {
    AManagerDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = AManagerController;
