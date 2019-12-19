import {Component, Input, OnInit, OnChanges} from '@angular/core';
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
  @Input() isDate: string;

  lineChartData: ChartDataSets[] = [
    { data: [0] },
  ];

  lineChartOptions = {
    responsive: true,
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

  chartInit(data) {
    this.lineChartData = [
      { data: data },
    ];


  }

  ngOnChanges() {
    if (this.data) {
      let sortData = this.data.sort((a, b) => {
        return  moment(a[this.isDate]) - moment(b[this.isDate]);
      });
      let newArrayDate = {};
      sortData.forEach(data => {
        // console.log(data)
        if(newArrayDate[data[this.isDate]]){
          newArrayDate[data[this.isDate]] = newArrayDate[data[this.isDate]]+1;
        }else{
          newArrayDate[data[this.isDate]] = 1;
        }
      });

      console.log(newArrayDate)

      this.chartInit([85, 72, 78, 75, 77, 75]);
    }
  }

}
