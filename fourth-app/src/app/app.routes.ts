import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Todo } from './projects/todo/todo';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { Parent } from './pages/parent/parent';
import { ReactiveForm } from './pages/reactive-form/reactive-form';
import { Products } from './pages/products/products';
import { Api } from './pages/api/api';
import { Review } from './projects/user-review/review/review';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: 'todo-project',
    component: Todo,
  },
  {
    path: 'parent',
    component: Parent,
  },
  {
    path: 'reactive-form',
    component: ReactiveForm,
  },
  {
    path: 'products/:id',
    component: Products,
  },
  {
    path: 'products',
    component: Products,
  },
  {
    path: 'api-crud',
    component: Api,
  },
  {
    path: 'user-review-project',
    component: Review,
  },
  {
    path: '**',
    component: PageNotFound,
  },
];
