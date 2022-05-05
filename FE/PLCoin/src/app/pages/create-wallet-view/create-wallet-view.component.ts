import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-wallet-view',
  templateUrl: './create-wallet-view.component.html',
  styleUrls: ['./create-wallet-view.component.scss']
})
export class CreateWalletViewComponent implements OnInit {

  walletName: string = ''
  constructor(private blockChainService: BlockchainService, private message: NzMessageService, private route: Router) { }

  ngOnInit(): void {
  }

  createWallet(){
    if(!this.walletName){
      this.message.error('Vui lòng nhập tên ví');
    }else{
      this.blockChainService.createWallets(this.walletName);
      this.message.success('Bạn đã tạo ví thành công');
      this.route.navigate(['/home']);
    }

  }

}
