import { Component, HostListener, OnInit } from '@angular/core';
import { SpinnerService } from './shared/services/spinner-service/spinner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private idleTimeout = 60 * 60 * 1000; // 30 minutes in milliseconds
  private idleTimer: any;

  constructor(public spinnerService: SpinnerService,private router:Router) {
    this.resetTimer();
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
    // Implement your logout logic here.
    localStorage.clear();
    this.router.navigate(["/login"])
    // For example, you can clear session data and redirect to the login page.
  }
}
