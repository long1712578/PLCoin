import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockchainViewComponent } from './pages/blockchain-view/blockchain-view.component';
import { BlockViewComponent } from './components/block-view/block-view.component';
import { CusTomTime } from './pipe/customTime.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BlockchainViewComponent,
    BlockViewComponent,
    CusTomTime
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    CusTomTime
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
