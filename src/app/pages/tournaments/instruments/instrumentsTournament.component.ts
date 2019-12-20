import { Input, Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { Tournaments } from '../../../models/tournaments';
import {Globals} from '../../../globals';

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

  constructor(public openMobile: Globals) { }

  ngOnInit() {

  }

  openmodalclick() {
    this.openmodal.emit();
  }

  ngOnChanges() {
    if (this.tournamentsData && this.tournamentsData !== undefined) {
      const tourData = this.tournamentsData;
      this.alltournaments = tourData['tournaments'].length;

      this.currenttournaments = tourData['tournaments'].filter((tournament: any) => {
        return !tournament.isEnded;
      }).length;

      this.oldtournaments = tourData['tournaments'].filter((tournament: any) => {
        return tournament.isEnded;
      }).length;
    }
  }
}
