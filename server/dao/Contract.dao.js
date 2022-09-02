const Contract = require('../models/Contract');
var ContractDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateContract: updateContract
}

function findAll() {
    return Contract.findAll();
}

function findById(ContractID) {
    return Contract.findByPk(ContractID);
}

function deleteById(ContractID) {
    return Contract.destroy({ where: { ContractID: ContractID } });
}

function create(contract) {
    var newContract = new Contract(contract);
    return newContract.save();
}

function updateContract(contract, ContractID) {
    var updateContract = {
        StartDate: contract.StartDate,
        EndDate: contract.EndDate,
        RoyaltyPercentage: contract.RoyaltyPercentage,
        ContractTerms: contract.ContractTerms
    };
    return Contract.update(updateContract, { where: { ContractID: ContractID } });
}
module.exports = ContractDao;