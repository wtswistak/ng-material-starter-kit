import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  styleUrls: ['./form.component.scss'],
  templateUrl: './form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent {
  readonly name: FormGroup = new FormGroup({ 
    name: new FormControl('',[
      Validators.minLength(3),Validators.required],
      ) });


  onNameSubmitted(name: FormGroup): void {
    console.log(name.value);
  }
}
