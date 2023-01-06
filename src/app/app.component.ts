import { Component } from '@angular/core';
import {of} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  names$ = of(['Tom', 'Andrew', 'Chris', 'Peter']);
  title = 'ng-material-starter-kit-acms';
}
