const express = require('express');
const router = express.Router();

const transactionsController = require('@controllers/transactionsController')

router.get('/admin/all', transactionsController.getAllTransactions)

router.get('/filter/account', transactionsController.getTransactions)

router.post('/new', transactionsController.createTransaction)

router.put('/confirm', transactionsController.completeTransaction)

module.exports = router;