import {Input, Component, OnInit, OnChanges} from '@angular/core';
import {Products} from '../../../models/products';

@Component({
  selector: 'app-instruments-shop',
  templateUrl: './instrumentsShop.component.html',
  styleUrls: ['./instrumentsShop.component.scss']
})
export class InstrumentsShopComponent implements OnInit, OnChanges {
  @Input() productsData: Products;

  all: number = null;

  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges() {
    console.log(this.productsData)
    if (this.productsData !== null) {
      // this.all = this.productsData.length;
    }
  }
}
