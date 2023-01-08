import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { CryptoModel } from '../../models/crypto.model';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-crypto-list',
  styleUrls: ['./crypto-list.component.scss'],
  templateUrl: './crypto-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoListComponent {
  readonly cryptos$: Observable<CryptoModel[]> = this._cryptoService.getAll()
  .pipe(
   
  );

  constructor(private _cryptoService: CryptoService) {
  }
}
