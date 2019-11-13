import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-tournament',
  templateUrl: './add-tournament.component.html',
  styleUrls: ['./add-tournament.component.scss']
})
export class AddTournamentComponent implements OnInit {
  public selectedtab = 1;

  constructor() { }

  ngOnInit() {
  }

  selectTab($event) {
    this.selectedtab = $event;
  }
}
