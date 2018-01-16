import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MeetupsComponent } from './controllers/meetups/meetups.component';
import { AppRoutingModule } from './config/app-routing.module';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    MeetupsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
