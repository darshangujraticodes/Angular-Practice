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

  taskList: taskType[] = [];
}
