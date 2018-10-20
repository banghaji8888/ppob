'use strict'

exports.currFormat = function(price){
    var arr = price.split(",")
    var out = price;
    if(arr[arr.length - 1] == ""){
        arr.pop()
        out = arr.join(",")
    }

    out = out.replace("."," ")
    return out
}

exports.error = function(res,err){
    console.log(err)
    res.json(string.response("99","general_error"))
}
