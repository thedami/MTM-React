const express = require('express');
const router = express.Router();
const EventController = require('../controller/Event.controller');
const {check} = require('express-validator');


router.post('/', [check('Description').isAlpha('en-US',{ignore:" "}),
				check('Date').isDate(),
				check('Venue').isAlpha('en-US',{ignore:" "}),
				check('Country').isAlpha('en-US',{ignore:" "}),
				check('Address').isAlpha('en-US',{ignore:" "})],
				EventController.addEvent);
router.get('/', EventController.findEvent);
router.get('/:id', EventController.findEventByID);
router.put('/:id', [check('Description').isAlpha('en-US',{ignore:" "}),
				check('Date').isDate(),
				check('Venue').isAlpha('en-US',{ignore:" "}),
				check('Country').isAlpha('en-US',{ignore:" "}),
				check('Address').isAlpha('en-US',{ignore:" "})],
				EventController.updateEvent);
router.delete('/:id', EventController.deleteById);

module.exports = router;