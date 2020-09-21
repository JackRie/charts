import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { fromEventPattern } from 'rxjs';
import { ChartDataService } from '../chart-data.service';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  tasks: any = [];
  chart: any;
  constructor(private service: ChartDataService) {}
  ngOnInit(): void {
    this.getTasks();
  }

  getTasks = () => {
    this.service.getTasks().subscribe((response) => {
      this.tasks = response;
      console.log(response);
    });
  };
}
