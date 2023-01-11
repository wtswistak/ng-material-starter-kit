import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-age',
  styleUrls: ['./form-age.component.scss'],
  templateUrl: './form-age.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormAgeComponent {
  readonly age: FormGroup = new FormGroup({
    age: new FormControl('',[Validators.min(18)])
  });

  onAgeSubmitted(age: FormGroup): void {
    console.log(age.value);
  }

  
}
