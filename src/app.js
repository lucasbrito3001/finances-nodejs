const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Routes
const accountsRouter = require('./routes/accounts');

// Using routes
app.use("/accounts", accountsRouter);

module.exports = app;

