import {Component, Input, OnInit, OnChanges} from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit, OnChanges {
  @Input() color: string;
  @Input() icon: string;
  @Input() title: string;
  @Input() data: any;
  datalength: number;

  constructor() {
  }

  ngOnInit() {
  }


  ngOnChanges() {
    if (this.data) {
      this.datalength = this.data.length;
    }
  }

}
