import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { JobsGridModel } from '../../models/jobs-grid.model';
import { JobsGridService } from '../../services/jobs-grid.service';

@Component({
  selector: 'app-jobs-grid',
  styleUrls: ['./jobs-grid.component.scss'],
  templateUrl: './jobs-grid.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobsGridComponent {
  readonly girdJobs$: Observable<JobsGridModel[]> = this._jobsGridService.getAll();

  constructor(private _jobsGridService: JobsGridService) {
  }
}
