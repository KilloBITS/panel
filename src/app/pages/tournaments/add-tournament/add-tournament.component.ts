import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-tournament',
  templateUrl: './add-tournament.component.html',
  styleUrls: ['./add-tournament.component.scss']
})
export class AddTournamentComponent implements OnInit {
  selecttab = 1;

  constructor() { }

  ngOnInit() {
  }

  selectTab($event) {
    this.selecttab = $event;
  }
}
