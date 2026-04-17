import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  counter: WritableSignal<number> = signal(0);

  decrement() {
    if (this.counter() > 0) {
      this.counter.update((val) => val - 1);
    }
  }

  increment() {
    this.counter.update((val) => val + 1);
  }

  reset() {
    this.counter.set(0);
  }
}
