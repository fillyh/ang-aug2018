import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../../components/home/home.component';
import { LoginComponent } from '../../components/login/login.component';
import { RegisterComponent } from '../../components/register/register.component';
import { UsersComponent } from '../../components/users/users.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import {ProductsComponent} from '../../components/products/products.component';
import { ProfileHomeComponent } from '../../components/profile/profile-home/profile-home.component';
import { ProfileAboutComponent } from '../../components/profile/profile-about/profile-about.component';
import { ProfileContactComponent } from '../../components/profile/profile-contact/profile-contact.component';
import { NotFoundComponent } from '../../components/not-found/not-found.component';
import { ProfileModule } from '../profile/profile.module';
import { GithubComponent } from '../../components/github/github.component';
import { AdminComponent } from '../../components/admin/admin.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UsersComponent },
  { path: 'products', component: ProductsComponent},
  {path: 'user/:id', loadChildren: () => ProfileModule},
  {path: 'admin', component: AdminComponent},
  {path: 'github', component: GithubComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
