import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Service } from './pages/service/service';
import { Login } from './pages/login/login';
import { Contact } from './pages/contact/contact';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { Profile } from './pages/profile/profile';
import { Users } from './pages/users/users';
import { UserDetails } from './pages/user-details/user-details';
import { Products } from './pages/products/products';
import { ApiOperation } from './pages/api-operation/api-operation';
import { ProductDetails } from './pages/product-details/product-details';
import { ApiCrud } from './api-crud/api-crud';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'about/:name/:age',
    component: About,
  },
  {
    path: 'about/:name',
    component: About,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'service',
    component: Service,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: 'register',
    redirectTo: 'login',
  },
  {
    path: 'profile',
    component: Profile,
  },
  {
    path: 'products',
    component: Products,
  },
  {
    path: 'users',
    component: Users,
  },
  {
    path: 'user-details/:id',
    component: UserDetails,
  },
  {
    path: 'api-operation',
    component: ApiOperation,
  },
  {
    path: 'product-details/:id',
    component: ProductDetails,
  },
  {
    path: 'api-crud',
    component: ApiCrud,
  },
  {
    path: '**',
    component: PageNotFound,
  },
];
