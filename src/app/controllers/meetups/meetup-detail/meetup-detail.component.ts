import { Component, OnInit, Input } from '@angular/core';
import { Meetup } from '../../../models/meetup';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DataService }  from '../../../services/data.service';


@Component({
  selector: 'app-meetup-detail',
  templateUrl: './meetup-detail.component.html',
  styleUrls: ['./meetup-detail.component.css']
})
export class MeetupDetailComponent implements OnInit {
  @Input() meetup: Meetup;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location
  ) { }

  ngOnInit(): void {
  this.getMeetup();
  }

  getMeetup(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getMeetup(id)
      .subscribe(meetup => this.meetup = meetup);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
     this.dataService.updateMeetup(this.meetup)
       .subscribe(() => this.goBack());
   }

   delete(): void {
    //  this.meetups = this.meetups.filter(h => h !== meetup);
     this.dataService.deleteMeetup(this.meetup).subscribe(() => this.goBack());
   }
}
