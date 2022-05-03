const {BlockChain, Transactions} =  require('./blockchain');
const EC = require('elliptic').ec;
var ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('ab2c6543ce15bda915563b1408fd9cabb65cf191b76192a8d15bbdf40233f643');
const myWalletAddress = myKey.getPublic('hex');

let PLCoin = new BlockChain();
const txl = new Transactions(myWalletAddress, 'GOTO HCM', 10);
txl.signTransation(myKey);
PLCoin.addTransaction(txl);

console.log("\n Start Miner");
PLCoin.miningPendingTransaction(myWalletAddress);

console.log('\n blan', PLCoin.getBalanceTransaction(myWalletAddress));
PLCoin.chain[1].transactions[0].amount = 5;
console.log('\n is chain?', PLCoin.isChainValid());
