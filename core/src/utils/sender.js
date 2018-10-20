'use strict'

exports.post = function(url, params, callback){
    const options = {  
        url: url,
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: params,
        json: true
    };
    
    request(options, function(err, res, body) {  
        callback(body)
    });
}
