import {Injectable} from '@angular/core';
import {CanLoad, Route, Router} from '@angular/router';
import { BlockchainService } from './blockchain.service';

@Injectable({
  providedIn: 'root',
})
export class AuthSevice implements CanLoad {
  constructor(private blockChainService: BlockchainService, private router: Router) {}
  canLoad(route: Route): boolean {
      const Wallets = this.blockChainService.walletKeys;
      if(Wallets.length === 0){
        this.router.navigate(['/login']);
        return false;
      }else{
          return true;
      }
  }
}
