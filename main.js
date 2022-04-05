const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(index, timestamp, data, preHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.preHash = preHash;
        this.hash = this.calculateHash();
        this.none = 0;
    }

    calculateHash() {
        return SHA256(this.index + this.preHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
    
    mineBlock(levelDifficult) {
        while(this.hash.substring(0, levelDifficult) !== Array(levelDifficult + 1).join("0")) {
            this.none++;
            this.hash = this.calculateHash();
        }

        console.log("Mine", this.hash);
    }
}

class BlockChain {
    constructor(){
        this.chain = [this.createGenesisBlock()];
        this.levelDifficult = 2;
    }

    createGenesisBlock() {
        return new Block(0, "01/01/2022", "Genesis block", "0");
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.preHash = this.getLastBlock().hash;
        // newBlock.mineBlock(this.levelDifficult);
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
    
    isChainValid() {
        for(let i = 1; i< this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];

            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }

            if(currentBlock.preHash !== previousBlock.hash){
                return false;
            }
            return true;
        }
    }
}

let PLCoin = new BlockChain();
PLCoin.addBlock(new Block(1, "01/04/2022", {mount: 4}));
PLCoin.addBlock(new Block(2, "04/04/2022", {mount: 2}))
console.log("PLCoin Mine", PLCoin.isChainValid());
console.log("Change block");
PLCoin.chain[1].data = {mount: 100};
console.log("PLCoin Mine", PLCoin.isChainValid());