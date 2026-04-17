import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user-service';

// Object types
interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-users',
  imports: [RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  userList = signal<User[]>([]);

  constructor(public userService: UserService) {}
  ngOnInit() {
    const data = this.userService.userList();
    console.log(data);

    this.userList.set(data);
  }
}
