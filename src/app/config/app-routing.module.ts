import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MeetupsComponent }      from '../controllers/meetups/meetups.component';

const routes: Routes = [
  { path: '', redirectTo: '/meetups', pathMatch: 'full' },
  { path: 'meetups', component: MeetupsComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
