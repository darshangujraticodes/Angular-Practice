import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  imports: [FormsModule],
  templateUrl: './two-way-binding.html',
  styleUrl: './two-way-binding.css',
})
export class TwoWayBinding {
  nameSignal = signal('Darsh');
  age = 20;

  userData = signal({
    name: 'Darsh',
    age: 25,
    email: 'darshinfo@gmail.com',
  });

  updateUserData(key: string, event: string) {
    this.userData.update((prev) => ({ ...prev, [key]: event }));
  }
}
