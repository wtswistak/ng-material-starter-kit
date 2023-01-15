import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  styleUrls: ['./login-form.component.scss'],
  templateUrl: './login-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {
  readonly loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
  constructor(private http: HttpClient){}

  onLoginFormSubmitted(loginForm: FormGroup): void {
    const formData = this.loginForm.value;
    
    this.http.post('https://fakestoreapi.com/auth/login', formData).subscribe((res) => {
    console.log(res)
    });
  }
}
