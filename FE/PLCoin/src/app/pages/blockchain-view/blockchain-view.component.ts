import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-blockchain-view',
  templateUrl: './blockchain-view.component.html',
  styleUrls: ['./blockchain-view.component.scss']
})
export class BlockchainViewComponent implements OnInit {

  blocks: any[] = [];
  constructor(private blockchainService: BlockchainService) { 
    this.blocks = this.blockchainService.getBlocks();
  }

  ngOnInit(): void {
  }

}
