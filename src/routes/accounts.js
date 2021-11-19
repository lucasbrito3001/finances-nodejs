const express = require('express');
const router = express.Router();

const accountsController = require('@controllers/accounts')

router.post('/login', accountsController.login)

router.post('/register', (req, res) => {
    res.json(req.body)
})

module.exports = router;