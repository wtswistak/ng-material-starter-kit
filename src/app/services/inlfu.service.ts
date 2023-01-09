import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfluModel } from '../models/influ.model';

@Injectable({ providedIn: 'root' })
export class InlfuService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<InfluModel[]> {
    return this._httpClient.get<InfluModel[]>("https://6384fca14ce192ac60696c4b.mockapi.io/influecers-with-followers");
  }
}
