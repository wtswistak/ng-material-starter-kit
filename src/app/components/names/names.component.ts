import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {of} from 'rxjs';

@Component({
  selector: 'app-names',
  styleUrls: ['./names.component.scss'],
  templateUrl: './names.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NamesComponent {
  dataSource$ = of([
    {name: 'Anna'},
    {name: 'Casey'},
    {name: 'Maria'},
    {name: 'Viviene'},
  ]);
}
