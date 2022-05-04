import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockchainViewComponent } from './pages/blockchain-view/blockchain-view.component';

const routes: Routes = [
  {
    path: '', component: BlockchainViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
