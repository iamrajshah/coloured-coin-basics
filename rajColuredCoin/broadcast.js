var bitcoin = require('bitcoinjs-lib');
var request = require('request');

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

var signedTxHex= '0100000001d99d019c3b7e2e028f5ba42ccd4fade6632ffb46712025d0d0448c5578125279000000006a47304402203baeb25ef9ad387a85659c05f50b3945254cb8ea0881c8443bfcc667c2adb58702207615ef410a4af7ad229ef5a58327bf553650252da32ae0e808661e46221288cf012103969fe5202cc5397f2d70d3d51805f9396c307d70ff22862110b3ad16f0a412aeffffffff0358020000000000001976a914beaadf25b8c73bdc9ebd1b8a5cebd98fc87f095488ac00000000000000000c6a0a4343020527b00022101060bcdf03000000001976a9149de4340290feaf7926300193d9bcf8e51b83f75d88ac00000000';
var transaction = {
    'txHex': signedTxHex
}

postToApi('broadcast', transaction, function(err, body){
    if (err) {
        console.log('error: ', err);
    }
});
