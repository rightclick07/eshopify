import { Component, OnDestroy, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit, OnDestroy {
  hours!: string;
  minutes!: string;
  seconds!: string;
  private interval: any;

  constructor(private datePipe: DatePipe) {}

  ngOnInit() {
    this.updateTime();
    this.interval = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  updateTime() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0); // Set time to 12:00 AM

    const timeDiff = tomorrow.getTime() - now.getTime(); // Calculate time difference in milliseconds

    // Convert time difference to hours, minutes, and seconds
    let hoursRemaining = Math.floor(timeDiff / (1000 * 60 * 60));
    let minutesRemaining = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    let secondsRemaining = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Convert to strings with leading zeros
    this.hours = this.padZero(hoursRemaining);
    this.minutes = this.padZero(minutesRemaining);
    this.seconds = this.padZero(secondsRemaining);
  }

  padZero(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }
}

// updateTime() {
//   const now = new Date();
//   const offerClosingTime = new Date(now); // Get a copy of the current date and time
//   offerClosingTime.setHours(24); // Set offer closing time to 12:00 AM

//   const timeDiff = offerClosingTime.getTime() - now.getTime(); // Calculate time difference in milliseconds

//   // Convert time difference to hours, minutes, and seconds
//   let hoursRemaining = Math.floor(timeDiff / (1000 * 60 * 60));
//   let minutesRemaining = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
//   let secondsRemaining = Math.floor((timeDiff % (1000 * 60)) / 1000);

//   // Ensure the values are within valid ranges
//   hoursRemaining = Math.max(0, hoursRemaining);
//   minutesRemaining = Math.max(0, minutesRemaining);
//   secondsRemaining = Math.max(0, secondsRemaining);

//   // Convert to strings with leading zeros
//   this.hours = this.padZero(hoursRemaining);
//   this.minutes = this.padZero(minutesRemaining);
//   this.seconds = this.padZero(secondsRemaining);
// }

// padZero(num: number): string {
//   return num < 10 ? '0' + num : num.toString();
// }
// }
