'use strict'

exports.price = function(req,res){
    try{
        sender.post(string.getRajabillerUrl(),req.body,function(response){
            try{
                let status = response.STATUS
                let ket = response.KET
                if(status == "00"){
                    var out = string.response("00","success")
                    out['saldo'] = response.SALDO
                    out['data'] = priceParser(ket)
                    res.json(out)
                }else{
                    res.json(string.customResponse(status,ket))
                }
            }catch(e){
                helper.error(res,e)
            }
        })
    }catch(e){
        helper.error(res,e)
    }
}

exports.general = function(req,res){
    try{
        sender.post(string.getRajabillerUrl(),req.body,function(response){
            try{
                let status = response.STATUS
                let ket = response.KET
                if(status == "00"){
                    var out = string.response("00","success")
                    out['data'] = response
                    res.json(out)
                }else{
                    res.json(string.customResponse(status,ket))
                }
            }catch(e){
                helper.error(res,e)
            }
        })
    }catch(e){
        helper.error(res,e)
    }
}

function priceParser(ket){
    var arr = []
    let rows = ket.split(";")
    for(let i = 0; i < (rows.length - 1); i++){
        let row = rows[i].split(" \t")

        var obj = {
            name: row[0],
            desc: row[1],
            price: helper.currFormat(row[2])
        }

        arr[i] = obj
        console.log(row[0]+" => "+row[1]+" => "+row[2])
    }

    return arr
}