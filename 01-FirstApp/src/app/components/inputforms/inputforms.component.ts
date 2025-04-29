import { Component } from '@angular/core';

@Component({
  selector: 'app-inputforms',
  imports: [],
  templateUrl: './inputforms.component.html',
  styleUrl: './inputforms.component.css',
})
export class InputformsComponent {
  // constant direct display
  username = '';
  email = '';
  password = '';

  refUsername = '';
  refMail = '';

  // completion display
  displayUsername = '';
  displayEmail = '';

  handleInput(event: Event, type: string) {
    // const val = (event.target as HTMLInputElement).value;
    // console.log('Username Input : ', val);

    // this.username = val;

    if (type === 'username')
      this.username = (event.target as HTMLInputElement).value;
    if (type === 'email') this.email = (event.target as HTMLInputElement).value;
  }

  getData() {
    this.displayUsername = this.username;
    this.displayEmail = this.email;
  }
  setData() {
    this.username = 'Harry Potter';
    this.email = 'harry@gmail.com';
  }

  getRefData(val: string) {
    console.log(val);

    this.refUsername = val;
  }
}
