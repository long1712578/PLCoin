const SHA256 = require('crypto-js');

class Block {
    constructor(index, timestamp, data, preHash) {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.preHash = preHash;
        this.hash = this.calculateHask();
    }
    calculateHash() {
        return SHA256(this.index + this.preHash + this.timestamp + JSON.stringify(data)).toString();
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