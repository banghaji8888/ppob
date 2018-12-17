'use strict'

exports.checkSaldo = function(req,res,next){
    let saldo = 0

    if(saldo <= 0){
        res.json(string.response("42","empty_saldo"))
    }else{
        next()
    }
}