'use strict';

module.exports = function(app){
    var RB_PULSA = require('./biller/rajabiller/pulsa');
    var RB_GAME_ONLINE = require('./biller/rajabiller/game_online');

    app.post('/rajabiller/topup-pulsa',RB_PULSA.topup);
    app.post('/rajabiller/pulsa-price',RB_PULSA.price);

    app.post('/rajabiller/topup-game',RB_GAME_ONLINE.topup);
}