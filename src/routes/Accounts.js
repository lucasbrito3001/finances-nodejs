const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    res.json(req.body)
})

router.post('/register', (req, res) => {
    res.json(req.body)
})

module.exports = router;