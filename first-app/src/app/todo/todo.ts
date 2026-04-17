import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  task = signal([
    {
      id: 1,
      title: 'Complete Angular',
      status: false,
    },
    {
      id: 2,
      title: 'Complete React JS',
      status: false,
    },
    {
      id: 3,
      title: 'Complete Node JS',
      status: true,
    },
  ]);

  taskTitle = signal('');

  addNewTask() {
    if (this.taskTitle() == '') return;
    this.task.update((item) => [
      ...item,
      { id: this.task().length + 1, title: this.taskTitle(), status: false },
    ]);

    this.taskTitle.set('');
  }

  deleteTask(taskId: number) {
    console.log(taskId);

    this.task.update((item) => item.filter((val) => val.id != taskId));
  }
}
