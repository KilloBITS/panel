import { Component, Injectable  } from '@angular/core';
import {HttpService} from './services/http.service';
import {Globals} from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable()

export class AppComponent {
  active: number;
  key: number;

  constructor(public openMobile: Globals, public auth: Globals) {}

  selectButtonNav($event) {
    const keyEvent = $event.target.getAttribute('key');
    this.active = Number(keyEvent);
    this.auth.auth = true;
  }

  mobileMenu() {
    this.openMobile.openMobile = !this.openMobile.openMobile;
  }
}
