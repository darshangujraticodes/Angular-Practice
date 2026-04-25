import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersApiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersApiUrl);
  }

  addUser(userPayload: User): Observable<User> {
    return this.http.post<User>(this.usersApiUrl, userPayload);
  }

  updateUser(id: number, payload: User): Observable<User> {
    return this.http.put<User>(`${this.usersApiUrl}/${id}`, payload);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.usersApiUrl}/${id}`);
  }
}
