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

  switchColor = 'black';

  boxDisplayToggle() {
    this.boxDisplay = !this.boxDisplay;
  }

  showDiffColorBox() {
    this.divToggle = !this.divToggle;
  }

  selectDisplayBox(val: number) {
    if (val < 5) {
      this.color = val;
    } else {
      this.color = 5;
    }
  }

  inputDisplayBox(event: Event) {
    const num = parseInt((event.target as HTMLInputElement).value);
    this.selectDisplayBox(num);
  }

  switchAction(colVal: string) {
    this.switchColor = colVal;
  }
}
