import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetupsComponent }      from '../controllers/meetups/meetups.component';
import { MeetupDetailComponent }  from '../controllers/meetups/meetup-detail/meetup-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/meetups', pathMatch: 'full' },
  { path: 'meetups', component: MeetupsComponent },
  { path: 'detail/:id', component: MeetupDetailComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
