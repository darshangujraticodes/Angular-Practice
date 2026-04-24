import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Count } from '../../store/count';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() parentData: string | undefined;

  messg = signal('Child Data');

  constructor(public count: Count) {}
}
