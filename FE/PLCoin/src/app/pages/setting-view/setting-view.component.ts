import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-setting-view',
  templateUrl: './setting-view.component.html',
  styleUrls: ['./setting-view.component.scss']
})
export class SettingViewComponent implements OnInit {

  blockChain: any;
  constructor(private blockchainService: BlockchainService) { 
    this.blockChain = this.blockchainService.blockChain;
  }

  ngOnInit(): void {
  }

}
