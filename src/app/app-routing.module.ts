import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { CryptoListComponentModule } from './components/crypto-list/crypto-list.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'cryptos', component: CryptoListComponent }]), CryptoListComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
