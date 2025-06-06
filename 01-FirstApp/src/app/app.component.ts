import { Component, EventEmitter } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { EventsComponent } from './components/events/events.component';
import { InputformsComponent } from './components/inputforms/inputforms.component';
import { ControlflowComponent } from './components/controlflow/controlflow.component';
import { AngularloopComponent } from './components/angularloop/angularloop.component';
import { AngularsignalsComponent } from './components/angularsignals/angularsignals.component';
import { AngulareffectComponent } from './components/angulareffect/angulareffect.component';
import { AngularformsComponent } from './components/angularforms/angularforms.component';
import { AngulartodoComponent } from './components/angulartodo/angulartodo.component';
import { AngualardirectivesComponent } from './components/angualardirectives/angualardirectives.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './pages/profile/profile.component';

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
    AngularloopComponent,
    AngularsignalsComponent,
    AngulareffectComponent,
    AngularformsComponent,
    AngulartodoComponent,
    AngualardirectivesComponent,
    HomeComponent,
    HeaderComponent,

    RouterLink,
    RouterOutlet,
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
