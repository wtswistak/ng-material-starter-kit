import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { InfluComponent } from './influ.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatChipsModule],
  declarations: [InfluComponent],
  providers: [],
  exports: [InfluComponent]
})
export class InfluComponentModule {
}
