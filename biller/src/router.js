'use strict'

module.exports = function(app){
    var rajabiller = require('./biller/rajabiller/pulsa')

    app.post('/rajabiller/general',rajabiller.general)
    app.post('/rajabiller/price',rajabiller.price)
}