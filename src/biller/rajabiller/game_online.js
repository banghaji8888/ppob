'use strict'
/*
    Khusus mobile legend no pp diisi dengan ID Mobile legend member
    Khusus ETOLL no hp diisi dengan no kartu ETOLL member
    - semua produk game online
    - semua ETOL
    - semua produk gojek 
*/
exports.topup = function(req,res){
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
            }catch(ex){
                helper.error(res,ex)
            } 
        })
    }catch(e){
        helper.error(res,e)
    }
}