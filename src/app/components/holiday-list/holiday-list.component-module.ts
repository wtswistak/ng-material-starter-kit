import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HolidayListComponent } from './holiday-list.component';

@NgModule({
  imports: [MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MatOptionModule, CommonModule, MatProgressBarModule],
  declarations: [HolidayListComponent],
  providers: [],
  exports: [HolidayListComponent]
})
export class HolidayListComponentModule {
}
