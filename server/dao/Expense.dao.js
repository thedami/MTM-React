const Expense = require('../models/Expense');
var ExpenseDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateExpense: updateExpense
}

function findAll() {
    return Expense.findAll();
}

function findById(ExpenseID) {
    return Expense.findByPk(ExpenseID);
}

function deleteById(ExpenseID) {
    return Expense.destroy({ where: { ExpenseID: ExpenseID } });
}

function create(expense) {
    var newExpense = new Expense(expense);
    return newExpense.save();
}

function updateExpense(expense, ExpenseID) {
    var updateExpense = {
        Description: expense.Description,
        Amount: expense.Amount,
        IncuredBy: expense.IncuredBy
    };
    return Expense.update(updateExpense, { where: { ExpenseID: ExpenseID } });
}
module.exports = ExpenseDao;