import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-email',
  styleUrls: ['./form-email.component.scss'],
  templateUrl: './form-email.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormEmailComponent {
  readonly email: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.email])
  });

  onEmailSubmitted(email: FormGroup): void {
  }
}
