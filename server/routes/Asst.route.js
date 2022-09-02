const express = require('express');
const router = express.Router();
const AsstController = require('../controller/Asst.controller');
const {check} = require('express-validator');

router.post('/', [check('LastName').isAlpha('en-US',{ignore:" "}),
				check('FirstName').isAlpha('en-US',{ignore:" "})],
	AsstController.addAsst);
router.get('/', AsstController.findAsst);
router.get('/:id', AsstController.findAsstByID);
router.put('/:id', [check('LastName').isAlpha('en-US',{ignore:" "}),
				check('FirstName').isAlpha('en-US',{ignore:" "})], AsstController.updateAsst);
router.delete('/:id', AsstController.deleteById);

module.exports = router;