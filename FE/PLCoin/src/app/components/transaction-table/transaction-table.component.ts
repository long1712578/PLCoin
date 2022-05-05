import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.scss']
})
export class TransactionTableComponent implements OnInit {

  @Input() transactions: any;
  constructor() { }

  ngOnInit(): void {
    console.log('tran', this.transactions);
  }

}
