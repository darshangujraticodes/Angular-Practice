import { Component, WritableSignal, effect, signal } from '@angular/core';

@Component({
  selector: 'app-angular-form',
  imports: [],
  templateUrl: './angular-form.html',
  styleUrl: './angular-form.css',
})
export class AngularForm {
  name: WritableSignal<string> = signal<string>('');
  grade: WritableSignal<string> = signal('');
  toggleButon: WritableSignal<boolean> = signal(true);
  isLogin: WritableSignal<boolean> = signal(false);
  loggedInUser: WritableSignal<string> = signal('user');
  nameArray: WritableSignal<string[]> = signal<string[]>(['Rohan', 'Rahul', 'Rakesh']);

  // loop signals
  usernameList = signal(['Darsh', 'Rohan', 'Sahil', 'Mukesh', 'Komal']);

  userDetailList = signal([
    {
      id: 1,
      name: 'Darsh',
      skills: ['react', 'angular', 'node js', 'react native', 'java spring boot', 'next js'],
      email: 'darshaninfo@gmail.com',
      city: 'pune',
    },
    {
      id: 2,
      name: 'Komal',
      skills: ['react', 'git'],
      email: 'komalinfo@gmail.com',
      city: 'mumbai',
    },
    {
      id: 3,
      name: 'harshit',
      skills: ['react', 'next js', 'angular'],
      email: 'harshitinfo@gmail.com',
      city: 'lucknow',
    },
    {
      id: 4,
      name: 'Rajat',
      skills: ['node js', 'angular', 'php'],
      email: 'rajatinfo@gmail.com',
      city: 'gorakhpur',
    },
    {
      id: 5,
      name: 'mukesh',
      skills: ['strapi', 'shopify', 'wordpress'],
      email: 'mukeshinfo@gmail.com',
      city: 'bangalore',
    },
  ]);

  // switch signals
  deptSwitch = signal('');

  // switchGrade = signal();

  handleInput(event: string) {
    this.name.set(event);
    // console.log(event);
  }

  updateSignalArray() {
    console.log('Rerendering !!');
    this.nameArray.update((prev) => [...prev, 'Darsh']);
  }

  handleLogin(action: string) {
    if (action == 'login') {
      this.isLogin.set(true);
      this.loggedInUser.set('Darsh');
    } else {
      this.isLogin.set(false);
    }
  }

  selectPerformanceGrade(gradeValue: Event) {
    let target = gradeValue.target as HTMLSelectElement;
    console.log(target.value);
    this.grade.set(target.value);
  }

  // switch

  selectDepartment(event: Event) {
    let target = event.target as HTMLSelectElement;
    console.log(target.value);
    this.deptSwitch.set(target.value);
  }
}
