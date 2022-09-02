const ExpenseDao = require('../dao/Expense.dao');
const {validationResult} = require('express-validator');


var ExpenseController = {
    addExpense: addExpense,
    findExpense: findExpense,
    findExpenseByID: findExpenseByID,
    updateExpense: updateExpense,
    deleteById: deleteById
}

function addExpense(req, res) {
    let expense = req.body;

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors);
        return res.status(422).json({errors: errors.array()})
    }

    ExpenseDao.create(expense).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findExpenseByID(req, res) {
    ExpenseDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    ExpenseDao.deleteById(req.params.id).
        then((data) => {
            res.status(204).json({
                message: "Expense deleted successfully"
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateExpense(req, res) {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors);
        return res.status(422).json({errors: errors.array()})
    }

    ExpenseDao.updateExpense(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Expense updated successfully"
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findExpense(req, res) {
    ExpenseDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = ExpenseController;
