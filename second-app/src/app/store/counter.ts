import { Injectable , signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Counter {

  counter = signal(0);

  increment(){
    this.counter.update((prev) => prev+1);
  }

  decrement(){
    this.counter.update((prev) => prev-1);
  }

  reset(){
    this.counter.set(0);
  }






}
