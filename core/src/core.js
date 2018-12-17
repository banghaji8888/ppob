const express = require('express')
const app = express()
const bodyParser = require('body-parser')

var port = process.env.PORT || 3000
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

global.string = require('./utils/string')
global.sender = require('./utils/sender')
global.helper = require('./utils/helper')
global.request = require('request')
var midUserAuth = require('./middleware/user_auth')
var midCheckSaldo = require("./middleware/check_saldo")

app.use(bodyParser.json())
app.use(function(err,req,res,next){
    console.error(err.stack)
    res.sendStatus(500)
})

app.use(midUserAuth.userAuth)
app.use(midCheckSaldo.checkSaldo)

require('./router')(app)

app.listen(port, () => console.log('PPOB Biller listening on port '+port))