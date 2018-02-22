var bitcoin = require('bitcoinjs-lib');
var key = bitcoin.ECKey.makeRandom();
//var address = key.getAddress().toString();
var address = key.pub.getAddress(bitcoin.networks.testnet).toString();
var wif = key.toWIF();
console.log('new TESTNET address: ['+address+']');
console.log('Private Key of new address (WIF format): ['+wif+']');

