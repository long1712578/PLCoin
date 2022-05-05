import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { Transactions } from '../../../../../../BE/src/blockChain.js';

@Component({
  selector: 'app-create-transaction-view',
  templateUrl: './create-transaction-view.component.html',
  styleUrls: ['./create-transaction-view.component.scss']
})
export class CreateTransactionViewComponent implements OnInit {

  newTransaction: any;
  walletKey: any;
  constructor(private blockchainService: BlockchainService) { 
    this.walletKey = this.blockchainService.walletKeys[0];
  }

  ngOnInit(): void {
    this.newTransaction = new Transactions(this.walletKey.publicKey, null, 0);
  }

  createTransaction() {
    this.newTransaction.signTransation(this.walletKey.keyObj);
    this.blockchainService.blockChain.addTransaction(this.newTransaction);
    this.newTransaction = new Transactions(this.walletKey.publicKey, null, 0);
  }

}
