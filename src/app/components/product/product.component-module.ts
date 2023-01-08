import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { ProductComponent } from './product.component';

@NgModule({
  imports: [MatCheckboxModule, CommonModule, MatListModule, MatButtonModule, MatMenuModule, MatProgressSpinnerModule, MatTableModule],
  declarations: [ProductComponent],
  providers: [],
  exports: [ProductComponent]
})
export class ProductComponentModule {
}
