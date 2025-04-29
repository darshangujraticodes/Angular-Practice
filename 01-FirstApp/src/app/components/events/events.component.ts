import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent {
  handleEventType(event: Event, type: string) {
    if (type == 'click') {
      console.log('Click Event');
    }

    if (type === 'mouseEnter') {
      console.log('Mouse Enter Event');
    }

    if (type === 'mouseLeave') {
      console.log('Mouse Leave Event');
    }
  }

  handleInput(event: Event, type: string) {
    if (type === 'input')
      console.log('Input tag value ', (event.target as HTMLInputElement).value);

    if (type === 'focus') console.log('Input tag is in Focus ');

    if (type === 'blur') console.log('Input tag is Blur ');
  }
}
