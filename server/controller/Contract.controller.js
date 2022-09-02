const ContractDao = require('../dao/contract.dao');
const {validationResult} = require('express-validator');


var ContractController = {
    addContract: addContract,
    findContract: findContract,
    findContractByID: findContractByID,
    updateContract: updateContract,
    deleteById: deleteById
}

function addContract(req, res) {
    let contract = req.body;

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors);
        return res.status(422).json({errors: errors.array()})
    }

    ContractDao.create(contract).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findContractByID(req, res) {
    ContractDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    ContractDao.deleteById(req.params.id).
        then((data) => {
            res.status(204).json({
                message: "Contract deleted successfully"
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateContract(req, res) {
     const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors);
        return res.status(422).json({errors: errors.array()})
    }
    ContractDao.updateContract(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Contract updated successfully"
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findContract(req, res) {
    ContractDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = ContractController;
