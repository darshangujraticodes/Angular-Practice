import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { EventBinding } from './event-binding/event-binding';
import { PropertyBinding } from './property-binding/property-binding';
import { Signal } from './signal/signal';
import { AngularForm } from './angular-form/angular-form';
import { Counter } from './counter/counter';
import { TwoWayBinding } from './two-way-binding/two-way-binding';
import { Todo } from './todo/todo';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Login,
    Register,
    EventBinding,
    PropertyBinding,
    Signal,
    AngularForm,
    Counter,
    TwoWayBinding,
    Todo,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('First Angular App');
  name = 'Darshan Gujrati';
  age = 20;

  // getter method

  getName(): string {
    return this.name;
  }

  findSum(n1: number, n2: number): number {
    return n1 + n2;
  }
}
