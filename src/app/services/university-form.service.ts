import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UniversityModel } from '../models/university.model';

@Injectable({ providedIn: 'root' })
export class UniversityFormService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<UniversityModel[]> {
    return this._httpClient.get<UniversityModel[]>("http://universities.hipolabs.com/search?country=Poland");
  }
}
