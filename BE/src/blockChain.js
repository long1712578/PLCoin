const SHA256 = require('crypto-js/sha256');

class Transactions {
    constructor(fromAddress, toAddress, amount) {
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
    }
}
class Block {
    constructor(timestamp, transactions, preHash = '') {
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.preHash = preHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash() {
        return SHA256(this.index + this.preHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }
    
    mineBlock(levelDifficult) {
        while(this.hash.substring(0, levelDifficult) !== Array(levelDifficult + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }

        console.log("Mine", this.hash);
    }
}

class BlockChain {
    constructor(){
        this.chain = [this.createGenesisBlock()];
        this.levelDifficult = 4;
        this.peddingTransactions = [];
        this.miningReward = 100;
    }

    createGenesisBlock() {
        return new Block("01/01/2022", "Genesis block", "0");
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }

    // addBlock(newBlock) {
    //     newBlock.preHash = this.getLastBlock().hash;
    //     newBlock.mineBlock(this.levelDifficult);
    //     this.chain.push(newBlock);
    // }
    miningRewardTransaction(miningRewardAddress) {
        let block = new Block(Date.now(), this.peddingTransactions);
        block.mineBlock(this.levelDifficult);
        console.log("Mine blog success");
        this.chain.push(block);
        this.peddingTransactions = [
            new Transactions(null, miningRewardAddress, this.miningReward)
        ]
    }

    createTransaction(transaction) {
        this.peddingTransactions.push(transaction);
    }

    getBalanceTransaction(address) {
        let balance = 0;

        for(let block of this.chain) {
            for(let trans of block.transactions) {
                if(trans.fromAddress === address) {
                    balance -= trans.amount;
                }

                if(trans.toAddress === address) {
                    balance += trans.amount;
                }
            }
        }
        return balance;
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

module.exports.BlockChain = BlockChain;
module.exports.Transactions = Transactions;
