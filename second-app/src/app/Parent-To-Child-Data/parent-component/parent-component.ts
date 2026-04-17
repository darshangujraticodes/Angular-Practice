import { Component , signal } from '@angular/core';
import { ChildComponent } from '../child-component/child-component';


@Component({
  selector: 'app-parent-component',
  imports: [ChildComponent],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.css',
})
export class ParentComponent {

  username = signal("Darshan");

  usernameInput = signal('');

  userList = signal(["Mohan", "Rohan", "Mukul", "Harshit"])


  addUser(){
    this.userList.update((prev)  => [...prev, this.usernameInput()]   )
    this.usernameInput.set('');
  }

}
