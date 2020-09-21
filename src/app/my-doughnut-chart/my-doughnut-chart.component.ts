import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-doughnut-chart',
  templateUrl: './my-doughnut-chart.component.html',
  styleUrls: ['./my-doughnut-chart.component.css'],
})
export class MyDoughnutChartComponent implements OnInit {
  public doughnutChartLabels = [
    'Sales Q1',
    'Sales Q2',
    'Sales Q 3',
    'Sales Q4',
  ];
  public doughnutChartData = [10, 90, 100];
  public doughnutChartType = 'doughnut';

  constructor() {}

  ngOnInit(): void {}
}
