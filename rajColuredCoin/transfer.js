var bitcoin = require('bitcoinjs-lib');
var request = require('request');
var issuance_address = 'muuom1Fo1ZRtdCcdbMVpsP2mxT2tgaW9Ba';
var key = bitcoin.ECKey.makeRandom();
var to_address = 'mxu7NscnVhugvLYVFbBPwUHpuaf2hJ5JgH';
console.log('new TESTNET address: ['+to_address+']');


var send_asset = {
    'from': [issuance_address],		
    'fee': 5000,
    'to': [{
    	'address': to_address,
    	'amount': 1,
    	'assetId': 'La4txkva8FFhtqkk4vS6JxLQv2w7o55kDtpPGH'
    }]
};

function postToApi(api_endpoint, json_data, callback) {
    console.log(api_endpoint+': ', JSON.stringify(json_data));
    request.post({
        url: 'http://testnet.api.coloredcoins.org:80/v3/'+api_endpoint,
        headers: {'Content-Type': 'application/json'},
        form: json_data
    }, 
    function (error, response, body) {
        if (error) {
            return callback(error);
        }
        if (typeof body === 'string') {
            body = JSON.parse(body)
        }
        console.log('Status: ', response.statusCode);
        console.log('Body: ', JSON.stringify(body));
        return callback(null, body);
    });
};

postToApi('sendasset', send_asset, function(err, body){
    if (err) {
        console.log('error: ', err);
    }
});
