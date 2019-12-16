import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {Visitors} from '../../models/visitors';
import {Tournaments} from '../../models/tournaments';
import {Products} from '../../models/products';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [HttpService]
})

export class MainComponent implements OnInit {
  visitors: Visitors;
  tournaments: Tournaments;
  products: Products;

  constructor(private httpService: HttpService) {
  }

  async initVisitors() {
    await this.httpService.getVisitors().subscribe((data: Visitors) => {
      this.visitors = data;
    });
  }

  async initTournaments() {
    await this.httpService.getTournaments().subscribe((data: Tournaments) => {
      this.tournaments = data.tournaments;
    });
  }

  async initProducts() {
    await this.httpService.getProducts().subscribe((data: Products) => {
      this.products = data;
    });
  }


  ngOnInit() {
    this.initVisitors();
    this.initTournaments();
    this.initProducts();
  }

}
