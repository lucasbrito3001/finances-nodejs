const express = require('express');
const router = express.Router();

const accountsController = require('@controllers/accountsController')

router.post('/login', accountsController.login)

router.post('/register', accountsController.register)

module.exports = router;