import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Tournaments } from '../../models/tournaments';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss'],
  providers: [HttpService]
})

export class TournamentsComponent implements OnInit {
  tournaments: Tournaments;
  addmodal = false;
  constructor(private httpService: HttpService) { }

  openModal() {
    console.log('open');
    this.addmodal = true;
  }
  closeModal() {
    console.log('close');
    this.addmodal = false;
  }
  ngOnInit() {
    this.httpService.getTournaments().subscribe((data: Tournaments) => {
      this.tournaments = data;
    });
  }
}
