const express = require('express');
const cors = require('cors');
const accountsRouter = require('./routes/Accounts');

const app = express();

app.use(express.json());
app.use(cors());

// Using routers
app.use("/accounts", accountsRouter);

module.exports = app;

