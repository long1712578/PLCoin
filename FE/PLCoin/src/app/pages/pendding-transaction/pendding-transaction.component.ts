import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-pendding-transaction',
  templateUrl: './pendding-transaction.component.html',
  styleUrls: ['./pendding-transaction.component.scss']
})
export class PenddingTransactionComponent implements OnInit {

  penddingTransaction: any[] =[];
  constructor(private blockChainService: BlockchainService) { }

  ngOnInit(): void {
    this.penddingTransaction = this.blockChainService.getPendingTransactions();
  }
  minePenddingTransaction(){
    this.blockChainService.minePendingTransactions();
    console.log(this.blockChainService.getBlocks());
  }

}
