import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import * as moment from 'moment';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() title: string;
  @Input() chartid: string;
  @Input() data: any;
  @Input() className: string;
  @Input() isDate: string;
  chartLoader = true;

  lineChartData: ChartDataSets[] = [
    { data: [0] },
  ];
  lineChartLabels: Label[] = [];
  lineChartOptions = {
    responsive: true,
    legend: false
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'rgb(241, 215, 78)',
      backgroundColor: 'rgba(241, 215, 78, 0.5)',
    },
  ];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor() {
  }

  ngOnInit() {

  }

  chartInit(a) {
    this.lineChartData = [
      { data: a },
    ];
    this.chartLoader = false;
  }

  ngOnChanges() {
    if (this.data) {
      let newArrayDate: any = {};
      let arrayValues: any = [];

      let sortData: any = this.data.sort((a: any, b: any) => {
        return moment(a[this.isDate]) - moment(b[this.isDate]);
      });

      sortData.forEach(data => {
        if (newArrayDate[data[this.isDate]]) {
          newArrayDate[data[this.isDate]] = newArrayDate[data[this.isDate]] + 1;
        } else {
          newArrayDate[data[this.isDate]] = 1;
        }
      });

      this.lineChartLabels = Object.keys(newArrayDate);

      Object.keys(newArrayDate).forEach(len => {
        arrayValues.push(newArrayDate[len])
      })
      this.chartInit(arrayValues);
    }
  }
}
