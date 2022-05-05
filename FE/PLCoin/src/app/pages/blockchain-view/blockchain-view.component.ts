import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-blockchain-view',
  templateUrl: './blockchain-view.component.html',
  styleUrls: ['./blockchain-view.component.scss']
})
export class BlockchainViewComponent implements OnInit {

  blocks: any[] = [];
  selectedBlock: any|never;
  constructor(private blockchainService: BlockchainService) { 
  }

  ngOnInit(): void {
    this.blocks = this.blockchainService.getBlocks();
    if(this.blocks.length > 0){
      this.selectedBlock = this.blocks[0];
    }
  }
  showTransaction(block: any){
    this.selectedBlock = block;
    console.log(this.selectedBlock);
  }

}
