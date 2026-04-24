import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Users } from '../users/users';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(
    public router: Router,
    public route: ActivatedRoute,
  ) {}

  goToContact() {
    this.router.navigate(['contact']);
  }

  goToRegister() {
    this.router.navigate(['register']);
  }

  navQuery() {
    this.router.navigate(['profile'], {
      queryParams: {
        id: 3,
        name: 'Anil',
        age: 46,
      },
    });
  }

  navigateRouteParams() {
    this.router.navigate(['about', 'anil', '45']);
  }

  navigateToProducts() {
    this.router.navigate(['/api-operation']);
  }
}
