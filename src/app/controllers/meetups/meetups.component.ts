import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Meetup } from '../../models/meetup';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-meetups',
  templateUrl: './meetups.component.html',
  styleUrls: ['./meetups.component.css']
})
export class MeetupsComponent implements OnInit {


    meetups: Meetup[];

    constructor(private dataService: DataService) { }

    ngOnInit() {
      this.getMeetups();
    }

    getMeetups(): void {
      this.dataService.getMeetups()
          .subscribe(meetups => this.meetups = meetups);
    }

}
