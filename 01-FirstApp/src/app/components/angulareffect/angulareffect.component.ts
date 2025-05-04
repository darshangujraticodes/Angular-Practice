import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-angulareffect',
  imports: [],
  templateUrl: './angulareffect.component.html',
  styleUrl: './angulareffect.component.css',
})
export class AngulareffectComponent {
  counter = signal(1);
  displayEvenCounter = false;

  constructor() {
    effect(() => {
      if (this.counter() % 2 === 0) {
        this.displayEvenCounter = true;

        setTimeout(() => {
          this.displayEvenCounter = false;
        }, 2000);
      } else {
        this.displayEvenCounter = false;
      }
    });
  }

  incrementData() {
    this.counter.set(this.counter() + 1);
  }
}
