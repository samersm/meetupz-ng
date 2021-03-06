import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../db/in-memory-data.service';

import { AppComponent } from './app.component';
import { MeetupsComponent } from './controllers/meetups/meetups.component';
import { AppRoutingModule } from './config/app-routing.module';
import { DataService } from './services/data.service';
import { MessagesComponent } from './controllers/messages/messages.component';
import { MessageService } from './services/message.service';
import { MeetupDetailComponent } from './controllers/meetups/meetup-detail/meetup-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    MeetupsComponent,
    MessagesComponent,
    MeetupDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [DataService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
