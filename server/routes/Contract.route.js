const express = require('express');
const router = express.Router();
const ContractController = require('../controller/Contract.controller');
const {check} = require('express-validator');

router.post('/', [check('StartDate').isDate(),
				check('EndDate').isDate(),
				check('RoyaltyPercentage').isAlphanumeric(),
				check('ContractTerms').isAlpha('en-US',{ignore:" "})],
				ContractController.addContract);
router.get('/', ContractController.findContract);
router.get('/:id', ContractController.findContractByID);
router.put('/:id', [check('StartDate').isDate(),
				check('EndDate').isDate(),
				check('RoyaltyPercentage').isAlphanumeric(),
				check('ContractTerms').isAlpha('en-US',{ignore:" "})],
				ContractController.updateContract);
router.delete('/:id', ContractController.deleteById);

module.exports = router;