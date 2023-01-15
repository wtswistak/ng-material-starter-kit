import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserRoleModel } from '../../models/user-role.model';
import { UserRoleService } from '../../services/user-role.service';

@Component({
  selector: 'app-form-user-roles',
  styleUrls: ['./form-user-roles.component.scss'],
  templateUrl: './form-user-roles.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormUserRolesComponent {
  userRole = new FormControl('', [Validators.required]);

  readonly rolesList$: Observable<UserRoleModel[]> = this._userRoleService.getAll();
  readonly usersForm: FormGroup = new FormGroup({
    role: new FormControl(),
    email: new FormControl()
  });

  constructor(private _userRoleService: UserRoleService) {
  }

  onUsersFormSubmitted(usersForm: FormGroup): void {
    if(!usersForm.valid){
      return;
    }
    this._userRoleService.create({ 
      role: usersForm.get('role')?.value, 
      email: usersForm.get('email')?.value, 
       })
       .subscribe();
  }

  }

