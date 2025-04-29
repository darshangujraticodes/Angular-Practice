import { Component } from '@angular/core';

@Component({
  selector: 'app-controlflow',
  imports: [],
  templateUrl: './controlflow.component.html',
  styleUrl: './controlflow.component.css',
})
export class ControlflowComponent {
  boxDisplay = true;
  divToggle = true;
  color = 3;

  boxDisplayToggle() {
    this.boxDisplay = !this.boxDisplay;
  }

  showDiffColorBox() {
    this.divToggle = !this.divToggle;
  }

  selectDisplayBox(val: number) {
    if (val > 0) {
      this.color = val;
    } else {
      this.color = 0;
    }
  }

  inputDisplayBox(event: Event) {
    console.log(event);
  }
}
