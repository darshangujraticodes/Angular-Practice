import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css',
})
export class EventBinding {
  counter = 0;

  handleClick() {
    alert('Component Button is Pressed!');
  }

  countOperation(oprType: string) {
    if (oprType === 'plus') {
      this.counter++;
    } else {
      this.counter > 0 && this.counter--;
    }
  }

  handleEvent(event: Event) {
    console.log('Event Type : ', event.type);
  }
}
