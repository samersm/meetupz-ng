import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Meetup } from '../../models/meetup';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-meetups',
  templateUrl: './meetups.component.html',
  styleUrls: ['./meetups.component.css']
})
export class MeetupsComponent implements OnInit {
    meetups: Meetup[];
    meetup = {
      name:'',
      city:'',
      address:'',
      id: undefined
  }

    constructor(
      private route: ActivatedRoute,
      private dataService: DataService,
      private location: Location
              ) { }

    ngOnInit() {
      this.getMeetups();
    }

    getMeetups(): void {
      this.dataService.getMeetups()
          .subscribe(meetups => this.meetups = meetups);
    }


    onSubmit(): void {
       this.dataService.addMeetup(this.meetup)
         .subscribe(meetup => {
          console.log(meetup);
          this.meetups.push(meetup);
      });
     }

    delete(meetup: Meetup): void {
      this.meetups = this.meetups.filter(h => h !== meetup);
      this.dataService.deleteMeetup(meetup).subscribe();
    }

}
