'use strict'

var rajabillerUrl = "https://202.43.173.234/transaksi/json_devel.php"

var RD = {
    success: "Success",
    failed: "Failed",
    general_error: "General error",
    not_found: "Not Found"
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