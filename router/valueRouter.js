const express = require('express');
const router = express.Router();

router.use(function (req, res, next) {
    console.log('value router')
    next()
})

router.get('/', function(req, res) {
    res.send('value')
})

module.exports = router;