import { Component, HostListener, OnInit } from '@angular/core';
import { SpinnerService } from './shared/services/spinner-service/spinner.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private idleTimeout = 60 * 60 * 1000; // 30 minutes in milliseconds
  private idleTimer: any;

  constructor(public spinnerService: SpinnerService,private router:Router) {
    //this.resetTimer();
  }
  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // window.scrollTo(0, document.body.scrollHeight);
      window.scrollTo(0, 0);
    });
  }

  // Listen for user activity events to reset the idle timer.
  @HostListener('document:mousemove', ['$event'])
  @HostListener('document:keydown', ['$event'])
  @HostListener('document:click', ['$event'])
  resetTimer() {
    clearTimeout(this.idleTimer);
    this.idleTimer = setTimeout(() => {
      this.logout();
    }, this.idleTimeout);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(["/login"])
  }
}
