import { Component, Inject, inject, signal } from '@angular/core';
import { User } from '../../models/user';
import { TodoService } from '../../services/todos/todo-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { UserService } from '../../services/users/user-service';

import { LucideAngularModule, LucideSquarePen, LucideTrash2, ThumbsDown } from 'lucide-angular';

@Component({
  selector: 'app-api',
  imports: [LucideAngularModule],
  templateUrl: './api.html',
  styleUrl: './api.css',
})
export class Api {
  readonly LucideSquarePen = LucideSquarePen;
  readonly LucideTrash2 = LucideTrash2;

  // Signal API Request without subscribe
  todoService = inject(TodoService);
  todoData = toSignal(this.todoService.getTodos());

  //  Normal API Request with subscribe
  userData = signal<User[]>([]);
  name = signal('');
  email = signal('');
  age = signal<number | null>(null);
  isActive = signal<boolean | null>(null);
  editingId = signal<number | null>(null);

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.userData.set(data);
    });
  }

  onStatusChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.isActive.set(value === '' ? null : value === 'true');
  }

  onAgeChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.age.set(value ? Number(value) : null);
  }

  onUserStatusChange(user: User) {
    console.log(user);

    this.userService.updateUserStatus(user.id!, !user.is_active).subscribe(() => {
      this.userData.update((prev) =>
        prev.map((item) => (item.id === user.id ? { ...item, is_active: !item.is_active } : item)),
      );
    });
  }

  handleSubmit() {
    // ✅ validation
    if (
      !this.name().trim() ||
      !this.email().trim() ||
      this.age() === null ||
      this.isActive() === null
    ) {
      alert('Enter Valid Form Details !');
      return;
    }

    const payload: User = {
      name: this.name(),
      email: this.email(),
      age: Number(this.age()),
      is_active: this.isActive()!,
    };

    if (this.editingId() === null) {
      this.userService.addUser(payload).subscribe((data) => {
        alert('Form Submitted Successfully !');
        this.loadUsers();
        this.afterSubmit();
      });
    } else {
      this.userService.updateUser(this.editingId()!, payload).subscribe(() => {
        this.loadUsers();
        this.afterSubmit();
      });
    }
  }

  updateUserData(user: User) {
    // console.log(user);
    this.editingId.set(user.id!);
    this.name.set(user.name);
    this.email.set(user.email);
    this.age.set(user.age);
    this.isActive.set(user.is_active);
  }

  deleteSelectedUser(user: User) {
    console.log(user);

    const confirmDelete = confirm(`Are you sure you want to delete ${user.name}`);

    if (!confirmDelete) return;

    this.userService.deleteUser(user.id!).subscribe(() => {
      this.userData.update((prev) => prev.filter((u) => u.id != user.id));

      this.loadUsers();
    });
  }

  afterSubmit() {
    this.loadUsers();
    this.name.set('');
    this.email.set('');
    this.age.set(null);
    this.isActive.set(null);
    this.editingId.set(null);
  }
}
