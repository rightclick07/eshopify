import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.css']
})
export class HighchartsComponent implements OnInit {

  @Input() chartOptions!: Highcharts.Options;

  Highcharts: typeof Highcharts = Highcharts;

  constructor() {}

  ngOnInit(): void {}
}
