import { Component , signal } from '@angular/core';
import { TodoDataTypes } from './TodoTypes';
import {  LucideAngularModule   , LucideSquarePen, LucideTrash2 , LucideCircleCheckBig, LucideCheck } from 'lucide-angular'

@Component({
  selector: 'app-todo',
  standalone : true,
  imports: [    LucideAngularModule  ],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})

export class Todo {

  readonly LucideSquarePen =LucideSquarePen;
  readonly LucideTrash2 =  LucideTrash2;
  readonly LucideCircleCheckBig = LucideCircleCheckBig;
  readonly LucideCheck = LucideCheck;

  newTodo = signal('');
  editId = signal<string>('');

  todos = signal<TodoDataTypes[]>([]);

  addTodo(){
    const text = this.newTodo().trim();
    
    if(text == ''){
      return;
    }

    this.todos.update((prev) => (    [...prev, 
      {  title: text , id :  crypto.randomUUID(), isCompleted : false }]   ))

    this.newTodo.set("")
    }

 markTodoStatus(taskId : string){
 console.log("mark todo", taskId);
    this.todos.update((list) => list.map( (todo, i) => todo.id === taskId ? { ...todo , isCompleted : !todo.isCompleted } :  todo  ))
 }

 editTodo(taskId : string){
//  console.log("Edit todo", taskId);
 this.editId.set(taskId);

 const fetchTodo = this.todos().find((item) => item.id == taskId);

//  console.log(fetchTodo);

 if (!fetchTodo) return; 

 this.newTodo.set(fetchTodo.title);
 

 }

 deleteTodo(taskId : string){
  //  console.log("delete todo", taskId);
    this.todos.update((prev) => prev.filter(( item) =>    item.id != taskId  ))
 }

 updateTodo(taskId : string){
    // console.log(taskId);
    const text = this.newTodo().trim();
    if (!text) return;
    console.log(taskId, text);

    this.todos.update( (prev) => 
      prev.map(item => item.id == taskId ? {  ...item, title : text   } :  item  )
    )

    this.newTodo.set('');
    this.editId.set('');

 }


}
