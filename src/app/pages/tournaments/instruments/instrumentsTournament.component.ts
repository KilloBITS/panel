import { Input, Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { Tournaments } from '../../../models/tournaments';

@Component({
  selector: 'app-instruments-tournaments',
  templateUrl: './instrumentsTournament.component.html',
  styleUrls: ['./instrumentsTournament.component.scss']
})
export class InstrumentsTournamentComponent implements OnInit, OnChanges {
  @Input() tournamentsData: Tournaments;
  @Output() openmodal: EventEmitter<void> = new EventEmitter();
  alltournaments: number = null;
  currenttournaments: number = null;
  oldtournaments: number = null;

  constructor() { }

  ngOnInit() {

  }

  openmodalclick() {
    console.log('000')
    this.openmodal.emit();
  }

  ngOnChanges() {
    if (this.tournamentsData) {
      this.alltournaments = this.tournamentsData.tournaments.filter((tournament) => {
        return tournament.price > 0;
      }).length;

      this.currenttournaments = this.tournamentsData.tournaments.filter((tournament) => {
        return !tournament.isEnded;
      }).length;

      this.oldtournaments = this.tournamentsData.tournaments.filter((tournament) => {
        return tournament.isEnded;
      }).length;
    }
  }
}
