import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { JobModel } from '../../models/job.model';
import { JobTagsModel } from '../../models/job-tags.model';
import { JobService } from '../../services/job.service';
import { JobTagsService } from '../../services/job-tags.service';

@Component({
  selector: 'app-job',
  styleUrls: ['./job.component.scss'],
  templateUrl: './job.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobComponent {
  readonly jobs$: Observable<JobModel[]> = this._jobService.getAll();
  readonly tags$: Observable<JobTagsModel[]> = this._jobTagsService.getAll();

  constructor(private _jobService: JobService, private _jobTagsService: JobTagsService) {
  }
}
