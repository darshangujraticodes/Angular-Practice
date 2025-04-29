import { Component, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EventsComponent } from './components/events/events.component';
import { InputformsComponent } from './components/inputforms/inputforms.component';
import { ControlflowComponent } from './components/controlflow/controlflow.component';

// decorator
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LoginComponent,
    ProfileComponent,
    EventsComponent,
    InputformsComponent,
    ControlflowComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Darshan';
  counter = 0;

  handleCounter(oprType: string): void {
    if (oprType == 'add') this.counter += 1;
    if (oprType == 'subtract') {
      if (this.counter > 0) this.counter -= 1;
    }

    if (oprType == 'reset') this.counter = 0;
  }

  handleEvents(event: MouseEvent) {
    console.log('Mouse ClickEvent');

    console.log('Function called : ', event.type);
    console.log('Function called : ', (event.target as Element).className);
  }
}
