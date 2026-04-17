import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  normalData = 1;
  signalData = signal(1);

  width = signal(10);
  height = signal(15);

  area = computed(() => this.width() * this.height());

  constructor() {
    effect(() => {
      console.log('Does It Rerender Component : ', this.normalData, this.signalData());
    });
  }

  normalDataCounter() {
    this.normalData++;
  }

  signalDataCounter() {
    this.signalData.set(this.signalData() + 1);
  }

  updateHeight() {
    this.height.set(this.height() + 5);
  }
  updateWidth() {
    this.width.set(this.width() + 5);
  }

  reset() {
    this.width.set(10);
    this.height.set(15);
  }
}
