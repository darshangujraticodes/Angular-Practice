import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-angularsignals',
  imports: [],
  templateUrl: './angularsignals.component.html',
  styleUrl: './angularsignals.component.css',
})
export class AngularsignalsComponent {
  count = signal(10);

  x = 20;

  num = signal(1);

  constructor() {
    effect(() => {
      // console.log(this.x);
      // console.log(this.count());

      console.log(this.num());
    });
  }

  updateValue() {
    // this.x = this.x + 1;

    this.count.set(this.count() + 1);
  }

  signalNum(type: string) {
    if (type === 'inc') this.num.set(this.num() + 1);
    if (type === 'dec') this.num.set(this.num() - 1);
  }

  // computed signals

  compX = signal(40);
  compY = signal(60);

  compZ = computed(() => this.compX() + this.compY());

  updateCompX() {
    this.compX.set(20);
  }
  updateCompY() {
    this.compY.set(30);
  }
  resetComputeSignal() {
    this.compX.set(40);
    this.compY.set(60);
  }
}
