import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit,OnDestroy {
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';
  private interval: any;
 
 
  constructor(private datePipe: DatePipe) { }
 
  ngOnInit() {
    this.updateTime();
    // Update time every second on the banner
    this.interval = setInterval(() => {
      this.updateTime();
    }, 1000);
  }
 
  ngOnDestroy() {
    clearInterval(this.interval);
  }
 
  updateTime() {
    const currentDate = new Date();
    const formattedTime = this.datePipe.transform(currentDate, 'HH:mm:ss') ?? '00:00:00';
    const [hours, minutes, seconds] = formattedTime.split(':');
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }
}
