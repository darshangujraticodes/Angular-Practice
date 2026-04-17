import { Component, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  constructor(public route: ActivatedRoute) {}
  name = signal('');
  age: WritableSignal<number | undefined> = signal(undefined);

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.name.set(params['name']);
    });

    this.route.params.subscribe((params) => {
      this.age.set(params['age']);
    });
  }
}
