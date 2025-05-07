import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  name: string | null = 'Guest';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
  }
}
