const express = require('express');
const router = express.Router();
const {check} = require('express-validator');

const AManagerController = require('../controller/AManager.controller');

router.post('/', [check('LastName').isAlpha('en-US',{ignore:" "}),
				check('FirstName').isAlpha('en-US',{ignore:" "}),
				check('AsstID').isAlphanumeric()],
				AManagerController.addAManager);
router.get('/', AManagerController.findAManager);
router.get('/:id', AManagerController.findAManagerByID);
router.put('/:id', [check('LastName').isAlpha('en-US',{ignore:" "}),
				check('FirstName').isAlpha('en-US',{ignore:" "}),
				check('AsstID').isAlphanumeric()],
				AManagerController.updateAManager);
router.delete('/:id', AManagerController.deleteById);

module.exports = router;

