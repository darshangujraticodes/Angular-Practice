import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
  hobbyArray = ['Cricket', 'Music', 'Coding', 'Cooking', 'Exploring', 'Writing'];

  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    country: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    hobby: new FormArray([], Validators.required),
    terms: new FormControl(false, Validators.requiredTrue),
  });

  get hobbiesArray() {
    return this.form.get('hobby') as FormArray;
  }

  onHobbyChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;

    if (checkbox.checked) {
      this.hobbiesArray.push(new FormControl(checkbox.value));
    } else {
      const index = this.hobbiesArray.controls.findIndex((x) => x.value === checkbox.value);
      this.hobbiesArray.removeAt(index);
    }
  }

  onTermsChange(event: Event) {
    const termCheckbox = event.target as HTMLInputElement;

    if (termCheckbox.checked) {
      console.log(this.form.get('terms'));
    }
  }

  submit() {
    console.log('submit button clicked');

    if (this.form.invalid) {
      console.log('Form invalid ❌', this.form.value);
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
  }
}
