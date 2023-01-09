import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { JobsGridComponent } from './jobs-grid.component';

@NgModule({
  imports: [MatGridListModule, CommonModule, MatCardModule],
  declarations: [JobsGridComponent],
  providers: [],
  exports: [JobsGridComponent]
})
export class JobsGridComponentModule {
}
