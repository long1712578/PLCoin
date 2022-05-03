const EC = require('elliptic').ec;
var ec = new EC('secp256k1');
var key = ec.genKeyPair();

const keyPublic = key.getPublic('hex');
const keyPrivate = key.getPrivate('hex');

console.log('private key', keyPrivate);
console.log('public key', keyPublic);