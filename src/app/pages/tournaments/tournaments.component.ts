import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Tournaments } from '../../models/tournaments';
import {Globals} from '../../globals';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss'],
  providers: [HttpService]
})

export class TournamentsComponent implements OnInit {
  tournaments: Tournaments;
  addmodal = false;
  tourComponent = null;

  constructor(private httpService: HttpService, public openMobile: Globals) { }

  openModal() {
    this.addmodal = true;
  }
  closeModal() {
    this.addmodal = false;
  }

  clickList(event) {
    // console.log(this.openMobile.openMobile)
    const isTrueSet = event.target.getAttribute('id');
    if (isTrueSet || parseInt(isTrueSet) > 0) {
      this.tourComponent = parseInt(isTrueSet) ;
    } else {
      this.tourComponent = null;
    }
  }

  ngOnInit() {
    this.httpService.getTournaments().subscribe((data: Tournaments) => {
      this.tournaments = data;
    });
  }
}
