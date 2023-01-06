import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { ProductComponent } from './components/product/product.component';
import { HolidayListComponent } from './components/holiday-list/holiday-list.component';
import { CryptoListComponentModule } from './components/crypto-list/crypto-list.component-module';
import { ProductComponentModule } from './components/product/product.component-module';
import { HolidayListComponentModule } from './components/holiday-list/holiday-list.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'cryptos', component: CryptoListComponent }, { path: 'categories-menu', component: ProductComponent }, { path: 'public-holidays', component: HolidayListComponent }]), CryptoListComponentModule, ProductComponentModule, HolidayListComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
