import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userList() {
    return [
      {
        id: 1,
        name: 'Rohan',
        email: 'rohaninfo@gmail.com',
      },
      {
        id: 2,
        name: 'Mukul',
        email: 'mukulinfo@gmail.com',
      },
      {
        id: 3,
        name: 'Komal',
        email: 'komalinfo@gmail.com',
      },
      {
        id: 4,
        name: 'Sahil',
        email: 'sahilinfo@gmail.com',
      },
      {
        id: 5,
        name: 'Ajit',
        email: 'ajitinfo@gmail.com',
      },
    ];
  }
}
