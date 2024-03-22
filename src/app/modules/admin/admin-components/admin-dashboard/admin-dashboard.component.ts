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
  lineChartOptions!: Highcharts.Options;
  barChartOptions!: Highcharts.Options;
  pieChartOptions!:Highcharts.Options;
  // Sample data for sales by state in India
 salesData = [
  { name: 'Andhra Pradesh', y: 250000 },
  { name: 'Arunachal Pradesh', y: 180000 },
  { name: 'Assam', y: 210000 },
  { name: 'Bihar', y: 150000 },
  { name: 'Chhattisgarh', y: 220000 },
  { name: 'Goa', y: 90000 },
  { name: 'Gujarat', y: 320000 },
  { name: 'Haryana', y: 280000 },
  { name: 'Himachal Pradesh', y: 120000 },
  { name: 'Jharkhand', y: 190000 },
  { name: 'Karnataka', y: 310000 },
  { name: 'Kerala', y: 270000 },
  { name: 'Madhya Pradesh', y: 280000 },
  { name: 'Maharashtra', y: 480000 },
  { name: 'Manipur', y: 80000 },
  { name: 'Meghalaya', y: 70000 },
  { name: 'Mizoram', y: 60000 },
  { name: 'Nagaland', y: 90000 },
  { name: 'Odisha', y: 230000 },
  { name: 'Punjab', y: 260000 },
  { name: 'Rajasthan', y: 330000 },
  { name: 'Sikkim', y: 50000 },
  { name: 'Tamil Nadu', y: 360000 },
  { name: 'Telangana', y: 210000 },
  { name: 'Tripura', y: 60000 },
  { name: 'Uttar Pradesh', y: 420000 },
  { name: 'Uttarakhand', y: 110000 },
  { name: 'West Bengal', y: 340000 },
];

  // Define an array of colors for each bar
   barColors = [
  '#7cb5ec',
  '#434348',
  '#90ed7d',
  '#f7a35c',
  '#8085e9',
  '#f15c80',
  '#e4d354',
  '#2b908f',
  '#f45b5b',
  '#91e8e1',
  '#7cb5ec',
  '#434348',
];
  // Sample data (replace with your actual data)
  chartData: { name: string; value: number }[] = [
    { name: 'January', value: 10 },
    { name: 'February', value: 15 },
    { name: 'March', value: 12 },
    { name: 'April', value: 14 },
    { name: 'May', value: 16 },
    { name: 'June', value: 18 },
    { name: 'July', value: 20 },
    { name: 'August', value: 22 },
    { name: 'September', value: 24 },
    { name: 'October', value: 26 },
    { name: 'November', value: 28 },
    { name: 'December', value: 30 },
  ];
  ngOnInit() {
    // Initialize chart options based on sample data
    this.lineChartOptions = {
      chart: {
        type: 'line',
        height: 300, // Set the desired height in pixels
        width: 450, // Set the desired width in pixels
      },
      title: {
        text: 'Monthly Sales', // Set the chart title here
      },
      xAxis: {
        categories: this.chartData.map((item) => item.name),
      },
      yAxis: {
        title: {
          text: 'Sales in Rupees',
        },
      },
      series: [
        {
          name: 'Months',
          data: this.chartData.map((item) => item.value),
          type: 'line',
          color: this.barColors[0]
        },
      ],
    };

    // Initialize bar chart options with the updated data
    this.barChartOptions = {
      chart: {
        type: 'column',
        height: 300, // Set the desired height in pixels
        width: 450, // Set the desired width in pixels
      },
      title: {
        text: 'Monthly Orders', // Set the chart title here
      },
      xAxis: {
        categories: this.chartData.map((item) => item.name), // Use the months as x-axis labels
      },
      yAxis: {
        title: {
          text: 'Number of Orders',
        },
      },
      series: [
        {
          name: 'Months',
          data: this.chartData.map((item) => item.value), // Use the order counts as data for the bars
          type: 'column',
        },
      ],
    };

    this.pieChartOptions={
      chart: {
        type: 'pie', // Specify the chart type as 'pie'
        height: 300, // Set the desired height in pixels
        width: 450, // Set the desired width in pixels
      },
      title: {
        text: 'Sales by State in India', // Set the chart title here
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f}% ({point.y})',
          },
        },
      },
      series: [
        {
          name: 'Sales',
          data: this.salesData.map((item) => item.y), // Use the sales data for the pie chart,
           type: 'pie'
        },
      ],
    };

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


