const express = require('express');
const router = express.Router();
const ExpenseController = require('../controller/Expense.controller');
const {check} = require('express-validator');

router.post('/', [check('Description').isAlpha('en-US',{ignore:" "}),
				check('Amount').isAlphanumeric(),
				check('IncuredBy').isAlpha('en-US',{ignore:" "})],
				ExpenseController.addExpense);
router.get('/', ExpenseController.findExpense);
router.get('/:id', ExpenseController.findExpenseByID);
router.put('/:id', [check('Description').isAlpha('en-US',{ignore:" "}),
				check('Amount').isAlphanumeric(),
				check('IncuredBy').isAlpha('en-US',{ignore:" "})],
				ExpenseController.updateExpense);
router.delete('/:id', ExpenseController.deleteById);

module.exports = router;