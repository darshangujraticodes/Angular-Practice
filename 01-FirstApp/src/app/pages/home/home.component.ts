import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private route: Router) {}

  navigateToContact() {
    this.route.navigate(['contact'], {
      queryParams: { email: 'viratinfo@gmail.com' },
    });
  }
}
