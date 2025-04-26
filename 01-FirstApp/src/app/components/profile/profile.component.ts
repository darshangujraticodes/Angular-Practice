import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: '<h3>Custom Component: Profile , Welcome {{ name }}</h3>',
})
export class ProfileComponent {
  name = 'Harsh';
}
