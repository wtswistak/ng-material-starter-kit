import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { InfluModel } from '../../models/influ.model';
import { InlfuService } from '../../services/inlfu.service';

@Component({
  selector: 'app-influ',
  styleUrls: ['./influ.component.scss'],
  templateUrl: './influ.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfluComponent {
  readonly influ_properties$: Observable<InfluModel[]> = this._inlfuService.getAll();

  constructor(private _inlfuService: InlfuService) {
  }
}
