import {Component, OnInit} from '@angular/core';
import {Products} from '../../models/products';
import {HttpService} from '../../services/http.service';
import {Globals} from '../../globals';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  providers: [HttpService]
})
export class ShopComponent implements OnInit {
  products: Products;
  addmodal = false;

  constructor(private httpService: HttpService, public openMobile: Globals) {
  }

  openModal() {
    this.addmodal = true;
  }

  closeModal() {
    this.addmodal = false;
  }

  ngOnInit() {
    this.httpService.getProducts().subscribe((data: Products) => {
      this.products = data;
    });
  }
}
