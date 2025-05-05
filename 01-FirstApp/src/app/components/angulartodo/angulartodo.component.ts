import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type taskType = {
  id: number;
  task: string;
  status: string;
};

@Component({
  selector: 'app-angulartodo',
  imports: [FormsModule],
  templateUrl: './angulartodo.component.html',
  styleUrl: './angulartodo.component.css',
})
export class AngulartodoComponent {
  taskName = '';
  taskStatus = '';
  editMode = false;
  editDataId = 0;
  error: string[] = [];

  taskList: taskType[] = [];

  addTodoTask() {
    // console.log(this.taskName);
    // console.log(this.taskStatus);

    if (this.taskName == '') {
      this.error.push('taskNameError');
    } else if (this.taskStatus == '') {
      this.error.pop();
      this.error.push('taskStatusError');
    } else {
      this.taskList.push({
        id: Date.now(),
        task: this.taskName,
        status: this.taskStatus,
      });

      console.log(this.taskList);

      this.taskName = '';
      this.taskStatus = '';
      this.error = [];
    }
  }

  resetTodo() {
    this.taskName = '';
    this.taskStatus = '';
    this.editMode = false;
  }

  taskReset() {
    this.taskList = [];
    this.editMode = false;
    this.editDataId = 0;
  }

  deleteTask(taskId: number) {
    this.taskList = this.taskList.filter((item) => item.id != taskId);
  }

  updateTask(taskId: number) {
    const updateTaskData = this.taskList.map((item) => {
      if (item.id === taskId) {
        this.editDataId = item.id;
        console.log(item.id, item.task, item.status);
        this.taskName = item.task;
        this.taskStatus = item.status;
      }
    });

    this.editMode = true;
  }

  updateTaskData() {
    console.log(this.editDataId, this.taskName, this.taskStatus);

    this.taskList = this.taskList.map((item) =>
      item.id === this.editDataId
        ? { ...item, task: this.taskName, status: this.taskStatus }
        : item
    );

    // console.log(this.taskList);

    this.taskName = '';
    this.taskStatus = '';
    this.editMode = false;
  }
}
