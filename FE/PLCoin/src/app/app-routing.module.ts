import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockchainViewComponent } from './pages/blockchain-view/blockchain-view.component';
import { CreateTransactionViewComponent } from './pages/create-transaction-view/create-transaction-view.component';
import { CreateWalletViewComponent } from './pages/create-wallet-view/create-wallet-view.component';
import { PenddingTransactionComponent } from './pages/pendding-transaction/pendding-transaction.component';
import { SettingViewComponent } from './pages/setting-view/setting-view.component';
import { AuthSevice } from './services/auth.service';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/login'
  },
  {
    path: 'login', component: CreateWalletViewComponent,
  },
  {
    path: 'home', component: BlockchainViewComponent,
    canLoad: [AuthSevice]
  },
  {
    path: 'settings', component: SettingViewComponent,
    canLoad: [AuthSevice]
  },
  {
    path: 'create-transaction', component: CreateTransactionViewComponent,
    canLoad: [AuthSevice]
  },
  {
    path: 'list-pendding-transaction', component: PenddingTransactionComponent,
    canLoad: [AuthSevice]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
