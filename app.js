const express = require('express')
const app = express()
const port = 3000
const mainRouter = require('./router/mainRouter')
const valueRouter = require('./router/valueRouter')

app.use(function(req, res, next) {
    console.log('new connection')
    next()
})

app.use(express.static('public'));

app.use('/main', mainRouter)
app.use('/value', valueRouter)

app.listen(port, function() {
    console.log('server open')
})