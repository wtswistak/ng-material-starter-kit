import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobsGridModel } from '../models/jobs-grid.model';

@Injectable({ providedIn: 'root' })
export class JobsGridService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<JobsGridModel[]> {
    return this._httpClient.get<JobsGridModel[]>("https://636ce2d8ab4814f2b2712854.mockapi.io/job-posts");
  }
}
