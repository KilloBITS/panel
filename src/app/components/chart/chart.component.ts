import {Component, Input, OnInit, OnChanges} from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() title: string;
  @Input() data: any;

  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges() {
    console.log(this.title);
    console.log(this.data);
  }

}
