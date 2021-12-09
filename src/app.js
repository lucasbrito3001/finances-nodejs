const express = require('express');
const cors = require('cors');

const app = express();
app.get('env')
app.use(express.json());
app.use(cors());

// Routes
const accountsRouter = require('./routes/accounts');
const transactionsRouter = require('./routes/transactions');

// Using routes
app.use("/accounts", accountsRouter);
app.use("/transactions", transactionsRouter);

module.exports = app;

