import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { of } from 'rxjs';
import { NamesComponent } from './names.component';

@NgModule({
  imports: [CommonModule, MatTableModule],
  declarations: [NamesComponent],
  providers: [],
  exports: [NamesComponent]
})
export class NamesComponentModule {
  names$ = of(['Tom', 'Andrew', 'Chris', 'Peter']);
}
