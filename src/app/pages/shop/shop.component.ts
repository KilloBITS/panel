import {Component, OnInit} from '@angular/core';
import {Products} from '../../models/products';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  providers: [HttpService]
})
export class ShopComponent implements OnInit {
  products: Products;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getProducts().subscribe((data: Products) => {
      this.products = data;
    });
  }
}
