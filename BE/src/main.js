let PLCoin = new BlockChain();
PLCoin.createTransaction(new Transactions("address1", "address2", 100));
PLCoin.createTransaction(new Transactions("address2", "address1", 100));

console.log("\n Start Miner");
PLCoin.miningRewardTransaction("HCM city");
console.log("\n Mining...", PLCoin.getBalanceTransaction("HCM city"));

console.log("\n Start Miner again");
PLCoin.miningRewardTransaction("HCM city");
console.log("\n Mining...", PLCoin.getBalanceTransaction("HCM city"));
