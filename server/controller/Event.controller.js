const EventDao = require('../dao/Event.dao');
const {validationResult} = require('express-validator');


var EventController = {
    addEvent: addEvent,
    findEvent: findEvent,
    findEventByID: findEventByID,
    updateEvent: updateEvent,
    deleteById: deleteById
}

function addEvent(req, res) {
    let event = req.body;

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors);
        return res.status(422).json({errors: errors.array()})
    }

    EventDao.create(event).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findEventByID(req, res) {
    EventDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    EventDao.deleteById(req.params.id).
        then((data) => {
            res.status(204).json({
                message: "Event deleted successfully"
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateEvent(req, res) {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors);
        return res.status(422).json({errors: errors.array()})
    }

    EventDao.updateEvent(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Event updated successfully"
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findEvent(req, res) {
    EventDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = EventController;
