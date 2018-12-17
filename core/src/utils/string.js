'use strict'

var biller = "http://biller.bayarinaja.com"

var RD = {
    success: "Success",
    failed: "Failed",
    general_error: "General error",
    not_found: "Not Found",
    credential_not_matching: "Username dan password tidak cocok",
    empty_saldo: "Saldo tidak mencukupi untuk transaki ini"
}

exports.response = function(rc,rd){
    var out = {
        rc : rc,
        rd : RD[rd]
    };

    return out;
}

exports.customResponse = function(rc,rd){
    var out = {
        rc : rc,
        rd : rd
    };

    return out;
}

exports.getRajabillerUrl = function(){
    return rajabillerUrl
}