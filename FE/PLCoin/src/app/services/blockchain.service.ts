import { Injectable } from '@angular/core';
import {BlockChain, Transactions} from '../../../../../BE/src/blockChain.js';
import { ec } from 'elliptic';
@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  public blockChain = new BlockChain();
  public walletKeys: any[] = [];
  constructor() { 
    this.blockChain.levelDifficult = 1;
    this.blockChain.miningPendingTransaction('my-wallet-address');

    this.generateWalletKeys();
  }
  getBlocks(){
    return this.blockChain.chain;
  }
  private generateWalletKeys(){
    const EC = new ec('secp256k1');
    const key = EC.genKeyPair();
    this.walletKeys.push({
      keyObj: key,
      publicKey: key.getPublic('hex'),
      privateKey: key.getPrivate('hex'),
    });
  }
}