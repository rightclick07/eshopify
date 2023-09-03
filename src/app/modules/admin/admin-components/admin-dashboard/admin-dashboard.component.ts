import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  lineChartOptions: Highcharts.Options = {
    title: {
      text: 'Line Chart',
    },
    series: [
      {
        type: 'line',
        data: [1, 2, 3, 4, 5],
      },
    ],
  };

  barChartOptions: Highcharts.Options = {
    title: {
      text: 'Bar Chart',
    },
    series: [
      {
        type: 'bar',
        data: [5, 4, 3, 2, 1],
      },
    ],
  };
  constructor(){}
  ngOnInit(): void {
    
  }

}
