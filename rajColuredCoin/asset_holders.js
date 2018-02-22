var bitcoin = require('bitcoinjs-lib');
var request = require('request');
function getFromApi(api_endpoint, param, callback) {
    console.log('Get from:'+api_endpoint+'/'+param);
    request.get('http://testnet.api.coloredcoins.org:80/v3/'+api_endpoint+'/'+param, function (error, response, body) {
        if (error) {
            return callback(error);
        }
        if (typeof body === 'string') {
            body = JSON.parse(body)
        }
        console.log('Status:', response.statusCode);
        console.log('Body:', body);
        return callback(null, body);
    });
};

var assetid='La7hykxCVz5ZFhrvABK57SgiXqAnrYa6FdCRKm' //your asset ID here;

getFromApi('stakeholders',assetid,function(err, body){
  if (err) console.log('error: ', err);
});
