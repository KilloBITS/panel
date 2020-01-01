import {Input, Component, OnInit, OnChanges, Output, EventEmitter} from '@angular/core';
import {Products} from '../../../models/products';
import {Globals} from '../../../globals';

@Component({
  selector: 'app-instruments-shop',
  templateUrl: './instrumentsShop.component.html',
  styleUrls: ['./instrumentsShop.component.scss']
})
export class InstrumentsShopComponent implements OnInit, OnChanges {
  @Input() productsData: Products;
  @Output() openmodal: EventEmitter<void> = new EventEmitter();

  all: number = null;

  constructor(public openMobile: Globals) {
  }

  openmodalclick() {
    this.openmodal.emit();
  }

  ngOnInit() {

  }

  ngOnChanges() {
    console.log(this.productsData);
    if (this.productsData !== null) {
      // this.all = this.productsData.length;
    }
  }
}
