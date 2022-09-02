const express = require('express');
const router = express.Router();
const ScheduleController = require('../controller/Schedule.controller');
const {check} = require('express-validator');

router.post('/', [check('EventID').isAlphanumeric(),
				check('ArtistID').isAlphanumeric(),
				check('Date').isDate()],
				ScheduleController.addSchedule);
router.get('/', ScheduleController.findSchedule);
router.get('/:id', ScheduleController.findScheduleByID);
router.put('/:id', [check('EventID').isAlphanumeric(),
				check('ArtistID').isAlphanumeric(),
				check('Date').isDate()],
				ScheduleController.updateSchedule);
router.delete('/:id', ScheduleController.deleteById);

module.exports = router;