const express = require('express');
const router = express.Router();
const fs = require('fs');

router.use(function (req, res, next) {
    console.log('main router')
    next()
})

router.get('/', function(req, res) {
    fs.readFile('./public/main.html', 'utf-8', function(err, data) {
        if(err) {
            throw err
        }
        res.send(data)
    })
})

module.exports = router;