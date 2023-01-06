import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { CryptoListComponent } from './crypto-list.component';

@NgModule({
  imports: [MatChipsModule, CommonModule],
  declarations: [CryptoListComponent],
  providers: [],
  exports: [CryptoListComponent]
})
export class CryptoListComponentModule {
}
