import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { NamesComponent } from './names.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatTableModule],
  declarations: [NamesComponent],
  providers: [],
  exports: [NamesComponent]
})
export class NamesComponentModule {

}
