const express = require('express');
const router = express.Router();

router.use(function (req, res, next) {
    console.log('value router')
    next()
})

router.get('/', function(req, res) {
    res.send('value')
})

router.get('/list', function(req, res) {
    var jsonObj = [
        {id: 1, name: 'david'},
        {id: 2, name: 'paul'},
        {id: 3, name: 'mike'}
    ]
    var jsonStr = JSON.stringify(jsonObj)
    res.send(jsonStr)
})

module.exports = router;