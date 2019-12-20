import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {Visitors} from '../../models/visitors';

import {Tournaments} from '../../models/tournaments';
import {Products} from '../../models/products';
import {Users} from '../../models/users';

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
  users: Users;

  constructor(private httpService: HttpService) {
  }

  async initVisitors() {
    await this.httpService.getVisitors().subscribe((data: Visitors) => {
      this.visitors = data;
    });
  }

  async initTournaments() {
    await this.httpService.getTournaments().subscribe((data: Tournaments) => {
      this.tournaments = data;
    });
  }

  async initProducts() {
    await this.httpService.getProducts().subscribe((data: Products) => {
      this.products = data;
    });
  }

  async initUsers() {
    await this.httpService.getUsers().subscribe((data: Users) => {
      this.users = data;
    });
  }


  ngOnInit() {
    this.initVisitors();
    this.initTournaments();
    this.initProducts();
    this.initUsers();
  }

}
