import { Component, signal } from '@angular/core';
import { Child } from '../../component/child/child';
import { Count } from '../../store/count';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  parentData = signal('Parent Data');

  constructor(public count: Count) {}
}
