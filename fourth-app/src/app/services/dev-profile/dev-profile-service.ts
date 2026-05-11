import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DevProfile } from '../../models/profile';

@Injectable({
  providedIn: 'root',
})
export class DevProfileService {
  devProfileApiUrl = 'http://localhost:3000/developer_profile';

  constructor(private http: HttpClient) {}

  getProfileData(): Observable<DevProfile[]> {
    return this.http.get<DevProfile[]>(this.devProfileApiUrl);
  }
}
