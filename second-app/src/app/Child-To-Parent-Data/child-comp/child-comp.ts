import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  imports: [],
  templateUrl: './child-comp.html',
  styleUrl: './child-comp.css',
})


export class ChildComp {
@Input() user:string | undefined;
@Output() selectedUser = new EventEmitter();
@Output() deleteUser = new EventEmitter();

  whichUserSelected(name : string | undefined){
    // console.log(name);
    this.selectedUser.emit(name);
    
  }


  whichUserDeleted(name: string | undefined){
        // console.log(name);
    this.deleteUser.emit(name);
  }


}
