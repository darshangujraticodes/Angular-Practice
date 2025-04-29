import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent {
  handleEvent(event: Event, type: string) {
    if (type === 'click') {
      console.log(
        'Events',
        event.target,
        event.type,
        (event.target as Element).className
      );
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
