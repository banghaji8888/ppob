'use strict'

module.exports = function(app){
    var ppob = require('./controller/ppob_controller')

    app.post('/topup-pulsa',ppob.topup)
}