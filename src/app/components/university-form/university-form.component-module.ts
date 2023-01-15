import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { UniversityFormComponent } from './university-form.component';

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatRadioModule, CommonModule],
  declarations: [UniversityFormComponent],
  providers: [],
  exports: [UniversityFormComponent]
})
export class UniversityFormComponentModule {
}
