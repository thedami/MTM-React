const Asst = require('../models/Asst');
var AsstDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateAsst: updateAsst
}

function findAll() {
    return Asst.findAll();
}

function findById(AsstID) {
    return Asst.findByPk(AsstID);
}

function deleteById(AsstID) {
    return Asst.destroy({ where: { AsstID: AsstID } });
}

function create(asst) {
    var newAsst = new Asst(asst);
    return newAsst.save();
}

function updateAsst(asst, AsstID) {
    var updateAsst = {
        LastName: asst.LastName,
        FirstName: asst.FirstName,
    };
    return Asst.update(updateAsst, { where: { AsstID: AsstID } });
}
module.exports = AsstDao;