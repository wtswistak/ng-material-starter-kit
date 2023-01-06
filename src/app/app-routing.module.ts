import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { ProductComponent } from './components/product/product.component';
import { CryptoListComponentModule } from './components/crypto-list/crypto-list.component-module';
import { ProductComponentModule } from './components/product/product.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'cryptos', component: CryptoListComponent }, { path: 'products', component: ProductComponent }]), CryptoListComponentModule, ProductComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
