import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-angularforms',
  imports: [FormsModule],
  templateUrl: './angularforms.component.html',
  styleUrl: './angularforms.component.css',
})
export class AngularformsComponent {
  name = '';
  displayName = '';
  email = 'darsh@gmail.com';
  displayEmail = '';

  showName(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  displayNameData() {
    this.displayName = this.name;
  }

  showEmail(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  displayEmailData() {}
}
