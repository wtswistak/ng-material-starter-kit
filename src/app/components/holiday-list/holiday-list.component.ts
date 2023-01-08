import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { HolidayModel } from '../../models/holiday.model';
import { HolidayService } from '../../services/holiday.service';

@Component({
  selector: 'app-holiday-list',
  styleUrls: ['./holiday-list.component.scss'],
  templateUrl: './holiday-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HolidayListComponent {
  readonly holidays$: Observable<HolidayModel[]> = this._holidayService.getAll()
  .pipe(
    delay(2000),
    map(()=>[])
  );

  constructor(private _holidayService: HolidayService) {
  }
}
