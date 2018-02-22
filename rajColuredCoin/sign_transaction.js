var bitcoin = require('bitcoinjs-lib');

function signTx (unsignedTx, wif) {
    var privateKey = bitcoin.ECKey.fromWIF(wif)
    var tx = bitcoin.Transaction.fromHex(unsignedTx)
    var insLength = tx.ins.length
    for (var i = 0; i < insLength; i++) {
        tx.sign(i, privateKey)
    }
    return tx.toHex()
}

var key = 'L5Z67AvePM2kPPBRhoMVTCSNi4empECDYRGSShZwQ1G655gCvvCy';

var txHex = '0100000001d99d019c3b7e2e028f5ba42ccd4fade6632ffb46712025d0d0448c55781252790000000000ffffffff0358020000000000001976a914beaadf25b8c73bdc9ebd1b8a5cebd98fc87f095488ac00000000000000000c6a0a4343020527b00022101060bcdf03000000001976a9149de4340290feaf7926300193d9bcf8e51b83f75d88ac00000000';
var signedTxHex = signTx(txHex, key);
console.log("signedTxHex: ["+signedTxHex+"]");


