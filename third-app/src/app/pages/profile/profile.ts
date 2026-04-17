import { Component, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [RouterLink],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  constructor(public route: ActivatedRoute) {}

  name: WritableSignal<string> = signal('');
  id: WritableSignal<number> = signal(0);
  age: WritableSignal<number> = signal(0);

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.name.set(params['name']);
      this.id.set(params['id']);
      this.age.set(params['age']);
    });
  }
}
