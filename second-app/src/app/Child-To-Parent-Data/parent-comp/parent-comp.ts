import { Component, signal } from '@angular/core';
import { ChildComp } from '../child-comp/child-comp';
import { Counter } from '../../store/counter';

@Component({
  selector: 'app-parent-comp',
  imports: [ChildComp],
  templateUrl: './parent-comp.html',
  styleUrl: './parent-comp.css',
})
export class ParentComp {

  constructor(public state : Counter){}

  userList = signal(['Harshit', 'komal', 'Darsh', 'Sahil'])

  nameInput = signal('');
 
  selectUserName  = signal('');

  addNewUser(){
    this.userList.update((prev) =>  [...prev, this.nameInput()]  )
    this.nameInput.set("");

  }


  selectedUser(name : string ){
    // console.log(name);
    this.selectUserName.set(name);
  }


  deleteUser(name: string){
    console.log(name);
    this.userList.update((prev) =>    prev.filter((item) => item != name     ) )
  }

}
