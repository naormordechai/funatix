import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransferMarketContainerComponent } from './components/transfer-market-container/transfer-market-container.component';


const routes: Routes = [
  { path: '', component: TransferMarketContainerComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
