import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userType = 'Guest';

  handleLoginClick() {
    console.log('Login Button Clicked!');
    this.userType = 'Harry Potter';
  }
}
