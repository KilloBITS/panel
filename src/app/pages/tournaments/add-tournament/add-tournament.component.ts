import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-tournament',
  templateUrl: './add-tournament.component.html',
  styleUrls: ['./add-tournament.component.scss']
})
export class AddTournamentComponent implements OnInit {
  @Output() closemodal: EventEmitter<void> = new EventEmitter();
  public selectedtab = 1;

  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.closemodal.emit();
  }

  selectTab($event) {
    this.selectedtab = $event;
  }
}
