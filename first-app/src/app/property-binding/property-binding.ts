import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css',
})
export class PropertyBinding {
  isDisabled = true;

  handleClick() {
    alert('I am On !');
  }

  disabilityToggle = () => {
    this.isDisabled = !this.isDisabled;
  };
}
