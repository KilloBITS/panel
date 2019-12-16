import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {Visitors} from '../../models/visitors';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [HttpService]
})
export class MainComponent implements OnInit {
  visitors: Visitors;

  constructor(private httpService: HttpService) {
  }

  async initVisitors() {
    await this.httpService.getVisitors().subscribe((data: Visitors) => {
      this.visitors = data;
    });
  }

  ngOnInit() {
    this.initVisitors();
  }

}
