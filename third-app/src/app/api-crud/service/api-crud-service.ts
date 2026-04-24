import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UserDataType } from '../UserDataType';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiCrudService {
  apiURl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserDataType[]> {
    return this.http.get<UserDataType[]>(this.apiURl);
  }
}
