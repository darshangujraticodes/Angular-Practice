import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user-service';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails {
  initialState = { id: 0, name: '', email: '' };
  userData = signal<User>(this.initialState);
  paramsId = signal(0);

  constructor(
    public userService: UserService,
    public route: ActivatedRoute,
  ) {}
  ngOnInit() {
    const data = this.userService.userList();

    this.route.params.subscribe((params) => {
      const id = Number(params['id']);
      this.paramsId.set(id);
    });

    const fetchData = data.filter((item) => item.id == this.paramsId());

    this.userData.set(fetchData[0]);
  }
}
