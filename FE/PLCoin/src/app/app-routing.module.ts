import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockchainViewComponent } from './pages/blockchain-view/blockchain-view.component';
import { CreateTransactionViewComponent } from './pages/create-transaction-view/create-transaction-view.component';
import { PenddingTransactionComponent } from './pages/pendding-transaction/pendding-transaction.component';
import { SettingViewComponent } from './pages/setting-view/setting-view.component';

const routes: Routes = [
  {
    path: '', component: BlockchainViewComponent,
  },
  {
    path: 'settings', component: SettingViewComponent,
  },
  {
    path: 'create-transaction', component: CreateTransactionViewComponent,
  },
  {
    path: 'list-pendding-transaction', component: PenddingTransactionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
