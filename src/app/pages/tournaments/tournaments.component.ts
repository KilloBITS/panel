import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {Tournaments} from '../../models/tournaments';
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

  constructor(private httpService: HttpService, public openMobile: Globals) {
  }

  openModal() {
    this.addmodal = true;
  }

  closeModal() {
    this.addmodal = false;
  }

  clickList(event) {
    const isTrueSet = event.target.getAttribute('id');
    if (isTrueSet || parseInt(isTrueSet) > 0) {
      this.tourComponent = parseInt(isTrueSet);
    } else {
      this.tourComponent = null;
    }
  }

  /** tour methods **/
  startTour(event) {
    this.httpService.getStartTour(event.target.className.split(' ')[1].split('_')[1]).subscribe((data: any) => {
      console.log(data);
    });
  }

  liveTour(event) {
    this.httpService.getLiveTour(event.target.className.split(' ')[1].split('_')[1]).subscribe((data: any) => {
      console.log(data);
    });
  }

  activeTour(event) {
    this.httpService.getActiveTour(event.target.className.split(' ')[1].split('_')[1]).subscribe((data: any) => {
      console.log(data);
    });
  }

  editTour(event) {
    this.httpService.getEditTour(event.target.className.split(' ')[1].split('_')[1]).subscribe((data: any) => {
      console.log(data);
    });
  }

  endTour(event) {
    this.httpService.getEndTour(event.target.className.split(' ')[1].split('_')[1]).subscribe((data: any) => {
      console.log(data);
    });
  }

  removeTour(event) {
    this.httpService.getRemoveTour(event.target.className.split(' ')[1].split('_')[1]).subscribe((data: any) => {
      console.log(data);
    });
  }

  ngOnInit() {
    this.httpService.getTournaments().subscribe((data: Tournaments) => {
      this.tournaments = data;
    });
  }
}
