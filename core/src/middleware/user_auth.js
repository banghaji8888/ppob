'use strict'

exports.userAuth = function(req,res,next){
    let user = "youngky"
    let password = "andreas"

    if(req.body.username != user || req.body.password != password){
        res.json(string.response("41","credential_not_matching"))
    }else{
        next()
    }
}