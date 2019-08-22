import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLOR } from "../../shared/chart.color";

const SAMPLE_LINECHART_DATA: any[] = [
  {data: [45, 32, 78, 12, 39, 22], label: 'Sentiment Analysis'},
  {data: [61, 39, 58, 62, 39, 42], label: 'Image Recognition'},
  {data: [31, 79, 28, 52, 19, 62], label: 'Forecasting'},
];

const SAMPLE_LINECHART_LABELS: string[]= ['Jan','Feb','Mar','Apr','May','Jun'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  lineChartData: any[] = SAMPLE_LINECHART_DATA;
  lineChartLabels: string[] = SAMPLE_LINECHART_LABELS;
  lineChartType = 'line';
  lineChartLegend = true;
  lineChartOptions: any = { 
   resposive: true
  }
  lineChartColors = LINE_CHART_COLOR;
  ngOnInit() {
  }

}
