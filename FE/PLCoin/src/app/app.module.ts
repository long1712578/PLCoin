import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockchainViewComponent } from './pages/blockchain-view/blockchain-view.component';
import { BlockViewComponent } from './components/block-view/block-view.component';
import { CusTomTime } from './pipe/customTime.pipe';
import { TransactionTableComponent } from './components/transaction-table/transaction-table.component';
import { SettingViewComponent } from './pages/setting-view/setting-view.component';
import { FormsModule } from '@angular/forms';
import { CreateTransactionViewComponent } from './pages/create-transaction-view/create-transaction-view.component';
import { PenddingTransactionComponent } from './pages/pendding-transaction/pendding-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockchainViewComponent,
    BlockViewComponent,
    CusTomTime,
    TransactionTableComponent,
    SettingViewComponent,
    CreateTransactionViewComponent,
    PenddingTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    CusTomTime
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
