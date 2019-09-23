const express = require('express')
const app = express()
app.get('/', function(req, res) {
    res.send('Welcome Home')
})
app.get('/survey', function(req, res) {
    res.send('Welcome to the Survey')
})
console.log("running server")
app.listen(3000)