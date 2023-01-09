import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { JobComponent } from './job.component';

@NgModule({
  imports: [CommonModule, MatTableModule],
  declarations: [JobComponent],
  providers: [],
  exports: [JobComponent]
})
export class JobComponentModule {
}
