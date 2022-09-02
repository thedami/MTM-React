const ScheduleDao = require('../dao/schedule.dao');
const {validationResult} = require('express-validator');

var ScheduleController = {
    addSchedule: addSchedule,
    findSchedule: findSchedule,
    findScheduleByID: findScheduleByID,
    updateSchedule: updateSchedule,
    deleteById: deleteById
}

function addSchedule(req, res) {
    let schedule = req.body;

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors);
        return res.status(422).json({errors: errors.array()})
    }

    ScheduleDao.create(schedule).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findScheduleByID(req, res) {
    ScheduleDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    ScheduleDao.deleteById(req.params.id).
        then((data) => {
            res.status(204).json({
                message: "Schedule deleted successfully"
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateSchedule(req, res) {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors);
        return res.status(422).json({errors: errors.array()})
    }
    ScheduleDao.updateSchedule(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Schedule updated successfully"
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findSchedule(req, res) {
    ScheduleDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = ScheduleController;
