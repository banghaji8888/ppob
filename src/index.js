const express = require('express')
const app = express()
const bodyParser = require('body-parser')

var port = process.env.PORT || 2000
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

global.string = require('./utils/string')
global.sender = require('./utils/sender')
global.helper = require('./utils/helper')
global.request = require('request')

app.use(bodyParser.json())
app.use(function(err,req,res,next){
    console.error(err.stack)
    res.sendStatus(500)
})

require('./router')(app)

app.listen(port, () => console.log('PPOB Biller listening on port '+port))