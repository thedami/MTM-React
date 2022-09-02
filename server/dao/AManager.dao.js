const AManager = require('../models/AManager');
var AManagerDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateAManager: updateAManager
}

function findAll() {
    return AManager.findAll();
}

function findById(AManagerID) {
    return AManager.findByPk(AManagerID);
}

function deleteById(AManagerID) {
    return AManager.destroy({ where: { AManagerID: AManagerID } });
}

function create(aManager) {
    var newAManager = new AManager(aManager);
    return newAManager.save();
}

function updateAManager(aManager, AManagerID) {
    var updateAManager = {
        LastName: aManager.LastName,
        FirstName: aManager.FirstName,
        AsstID: aManager.AsstID,
    };
    return AManager.update(updateAManager, { where: { AManagerID: AManagerID } });
}
module.exports = AManagerDao;