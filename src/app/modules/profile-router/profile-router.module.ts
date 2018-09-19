import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from '../../components/profile/profile.component';
import { ProfileContactComponent } from '../../components/profile/profile-contact/profile-contact.component';
import { ProfileHomeComponent } from '../../components/profile/profile-home/profile-home.component';
import { ProfileAboutComponent } from '../../components/profile/profile-about/profile-about.component';

const routes: Routes =[
  {path: '', component: ProfileComponent, children:[
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: ProfileHomeComponent},
    {path: 'about', component: ProfileAboutComponent},
    {path: 'contact', component: ProfileContactComponent}
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ],

  exports: [
    RouterModule
  ]
})
export class ProfileRouterModule { }
