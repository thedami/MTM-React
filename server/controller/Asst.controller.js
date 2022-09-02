const AsstDao = require('../dao/Asst.dao');
const {validationResult} = require('express-validator');

var AsstController = {
    addAsst: addAsst,
    findAsst: findAsst,
    findAsstByID: findAsstByID,
    updateAsst: updateAsst,
    deleteById: deleteById
}

function addAsst(req, res) {
    let asst = req.body;


    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors);
        return res.status(422).json({errors: errors.array()})
    }

    AsstDao.create(asst).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findAsstByID(req, res) {
    AsstDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    AsstDao.deleteById(req.params.id).
        then((data) => {
            res.status(204).json({
                message: "Assistant deleted successfully"
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateAsst(req, res) {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors);
        return res.status(422).json({errors: errors.array()})
    }
    AsstDao.updateAsst(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Assistant updated successfully"
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findAsst(req, res) {
    AsstDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = AsstController;
