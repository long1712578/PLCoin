const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(index, timestamp, data, preHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.preHash = preHash;
        this.hash = this.calculateHash();
    }
    calculateHash() {
        return SHA256(this.index + this.preHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
    
}

class BlockChain {
    constructor(){
        this.chain = [this.createGenesisBlock()];
    }
    createGenesisBlock() {
        return new Block(0, "01/01/2022", "Genesis block", "0");
    }
    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }
    addBlock(newBlock) {
        newBlock.preHash = this.getLastBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
}

let PLCoin = new BlockChain();
PLCoin.addBlock(new Block(1, "01/04/2022", {mount: 4}));
PLCoin.addBlock(new Block(2, "04/04/2022", {mount: 2}))
console.log("PLCoin", JSON.stringify(PLCoin, null, 4));