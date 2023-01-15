import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { UniversityModel } from '../../models/university.model';
import { UniversityFormService } from '../../services/university-form.service';

@Component({
  selector: 'app-university-form',
  styleUrls: ['./university-form.component.scss'],
  templateUrl: './university-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniversityFormComponent {
  readonly university = new FormControl();
  
  readonly universityName$: Observable<UniversityModel[]> = this._universityFormService.getAll();

  constructor(private _universityFormService: UniversityFormService) {
  }
}
