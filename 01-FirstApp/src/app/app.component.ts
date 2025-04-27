import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';

// decorator
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, ProfileComponent],
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
}
