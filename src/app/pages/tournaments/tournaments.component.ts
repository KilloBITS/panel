import { Component, OnInit } from '@angular/core';
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
  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getTournaments().subscribe((data: Tournaments) => {
      this.tournaments = data;
    });
  }
}
