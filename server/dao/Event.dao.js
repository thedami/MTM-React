const Event = require('../models/Event');
var EventDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateEvent: updateEvent
}

function findAll() {
    return Event.findAll();
}

function findById(EventID) {
    return Event.findByPk(EventID);
}

function deleteById(EventID) {
    return Event.destroy({ where: { EventID: EventID } });
}

function create(event) {
    var newEvent = new Event(event);
    return newEvent.save();
}

function updateEvent(event, EventID) {
    var updateEvent = {
        Description: event.Description,
        Date: event.Date,
        Time: event.Time,
        Venue: event.Venue,
        Country: event.Country,
        Address: event.Email,
    };
    return Event.update(updateEvent, { where: { EventID: EventID } });
}
module.exports = EventDao;