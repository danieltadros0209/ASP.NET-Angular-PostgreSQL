import { Component, OnInit } from '@angular/core';

const SAMPLE_BARCHART_DATA: any[] = [
  {data: [45, 32, 78, 12, 39, 22, 68], label: 'S2 Sales'},
  {data: [41, 39, 58, 62, 39, 42, 78], label: 'S3 Sales'},
];

const SAMPLE_BARCHART_LABELS: string[]= ['W1','W2','W3','W4','W5','W6','W7'];


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartData: any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels: string[] = SAMPLE_BARCHART_LABELS;
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = { 
    scaleShowVerticalLines: false,
    resposive: true
  }

  ngOnInit() {
  }

}
