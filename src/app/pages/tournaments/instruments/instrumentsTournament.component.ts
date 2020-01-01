import {Input, Component, OnInit, OnChanges, Output, EventEmitter} from '@angular/core';
import {Tournaments} from '../../../models/tournaments';
import {Globals} from '../../../globals';
import {filter} from 'rxjs/operators';

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

  constructor(public openMobile: Globals) {
  }

  ngOnInit() {

  }

  openmodalclick() {
    this.openmodal.emit();
  }

  ngOnChanges() {
    if (this.tournamentsData) {
      const tourData = this.tournamentsData;
      this.alltournaments = tourData.tournaments.length;

      if (tourData.tournaments) {
        const a: any = tourData.tournaments;

        this.currenttournaments = a.filter((tournament: any) => {
          return !tournament.isEnded;
        }).length;

        this.oldtournaments = a.filter((tournament: any) => {
          return tournament.isEnded;
        }).length;

      } else {
        this.currenttournaments = 0;
        this.oldtournaments = 0;
      }

    }
  }
}
