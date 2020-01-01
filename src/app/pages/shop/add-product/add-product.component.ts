import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  @Output() closemodal: EventEmitter<void> = new EventEmitter();
  public selectedtab = 1;
  public selectedsubtab = 1;

  constructor() {
  }

  ngOnInit() {
  }

  closeModal() {
    this.closemodal.emit();
  }

  selectTab($event) {
    this.selectedtab = $event;
  }

  selectSubTab($event) {
    this.selectedsubtab = $event;
  }
}
