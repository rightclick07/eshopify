import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SpinnerService } from './shared/services/spinner-service/spinner.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private idleTimeout = 60 * 60 * 1000;
  private idleTimer: any;
  title: any;

  constructor(public spinnerService: SpinnerService, private router: Router) {
    //this.resetTimer();
  }


  ngOnInit() {
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
    // Implement your logout logic here.
    localStorage.clear();
    this.router.navigate(["/login"])
  }
}
