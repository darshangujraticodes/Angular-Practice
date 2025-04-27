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

    // onclick we are calling other function from handleClick function using this keyword which is used for self or current class reference
    this.otherFunction();
  }

  otherFunction() {
    console.log('other function ');
  }
}
