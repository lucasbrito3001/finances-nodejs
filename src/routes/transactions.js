const express = require('express');
const router = express.Router();

const transactionsController = require('@controllers/transactionsController')

router.post('/new', transactionsController.createTransaction)

router.get('/get/{id}', transactionsController.getTransactions)

module.exports = router;