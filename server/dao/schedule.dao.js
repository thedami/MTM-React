const Schedule = require('../models/schedule');
var ScheduleDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateSchedule: updateSchedule
}

function findAll() {
    return Schedule.findAll();
}

function findById(ScheduleID) {
    return Schedule.findByPk(ScheduleID);
}

function deleteById(ScheduleID) {
    return Schedule.destroy({ where: { ScheduleID: ScheduleID } });
}

function create(schedule) {
    var newSchedule = new Schedule(schedule);
    return newSchedule.save();
}

function updateSchedule(schedule, ScheduleID) {
    var updateSchedule = {
        EventID: schedule.EventID,
        ArtistID: schedule.ArtistID,
        Date: schedule.Date
    };
    return Schedule.update(updateSchedule, { where: { ScheduleID: ScheduleID } });
}
module.exports = ScheduleDao;