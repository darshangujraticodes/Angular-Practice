import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './Parent-To-Child-Data/parent-component/parent-component';
import { ParentComp } from './Child-To-Parent-Data/parent-comp/parent-comp';
import { ServiceComp } from './service-comp/service-comp';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ParentComponent, ParentComp, ServiceComp, CommonModule ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('second-app');

  username = signal("darshan")

  nameInput = signal('');

  amount = signal(5000)

  date = signal('8-24-2025')

}
