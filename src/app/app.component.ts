import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  active: number;
  key: number;
  constructor() {}

  selectButtonNav($event) {
    const keyEvent = $event.target.getAttribute('key');
    this.active = Number(keyEvent);
  }
}
