import { Component, signal } from '@angular/core';
import { ApiCrudService } from './service/api-crud-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, tap, map, of } from 'rxjs';
import { UserDetails } from '../pages/user-details/user-details';
import { UserDataType } from './UserDataType';

@Component({
  selector: 'app-api-crud',
  imports: [],
  templateUrl: './api-crud.html',
  styleUrl: './api-crud.css',
})
export class ApiCrud {
  userData = signal<UserDataType[] | undefined>(undefined);
  constructor(private apiService: ApiCrudService) {}

  // old api calling approach
  ngOnInit() {
    this.apiService.getUsers().subscribe((data) => {
      console.log(data);

      this.userData.set(data);
    });
  }
}
