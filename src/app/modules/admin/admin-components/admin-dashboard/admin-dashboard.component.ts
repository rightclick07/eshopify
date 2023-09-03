import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  selectedDate: Date | null = null;
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

  updateChartData(selectedDate: Date | null) {
    // Fetch data based on the selectedDate and update the chart
  }

  // Event handler for date picker change
  onDateChange(event: MatDatepickerInputEvent<Date>) {
    const selectedDate = event.value;
    this.updateChartData(selectedDate);
  }
}


