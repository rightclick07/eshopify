
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




// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { DatePipe } from '@angular/common';

// @Component({
//   selector: 'app-banner',
//   templateUrl: './banner.component.html',
//   styleUrls: ['./banner.component.css']
// })
// export class BannerComponent implements OnInit, OnDestroy {
//   hours!: string;
//   minutes!: string;
//   seconds!: string;
//   private interval: any;

//   constructor(private datePipe: DatePipe) {}

//   ngOnInit() {
//     this.updateTime();
//     this.interval = setInterval(() => {
//       this.updateTime();
//     }, 1000);
//   }

//   ngOnDestroy() {
//     clearInterval(this.interval);
//   }

//   updateTime() {
//     const now = new Date();
//     const tomorrow = new Date(now);
//     tomorrow.setDate(tomorrow.getDate() + 1);
//     tomorrow.setHours(0, 0, 0, 0); // Set time to 12:00 AM

//     const timeDiff = tomorrow.getTime() - now.getTime(); // Calculate time difference in milliseconds

//     // Convert time difference to hours, minutes, and seconds
//     let hoursRemaining = Math.floor(timeDiff / (1000 * 60 * 60));
//     let minutesRemaining = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
//     let secondsRemaining = Math.floor((timeDiff % (1000 * 60)) / 1000);

//     // Convert to strings with leading zeros
//     this.hours = this.padZero(hoursRemaining);
//     this.minutes = this.padZero(minutesRemaining);
//     this.seconds = this.padZero(secondsRemaining);
//   }

//   padZero(num: number): string {
//     return num < 10 ? '0' + num : num.toString();
//   }
// }








