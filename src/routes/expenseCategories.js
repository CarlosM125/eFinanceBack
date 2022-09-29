const express = require("express");
const checkAuth = require ("../middleware/check-auth");
const ExpenseCategoriesController = require('../controllers/expenseCategory')
const router = express.Router();

/**
 * API routes for incomes
 */
router.post('', ExpenseCategoriesController.createExpenseCategory);
router.get('', checkAuth, ExpenseCategoriesController.retrieveExpenseCategories);

module.exports = router;