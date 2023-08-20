
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-account-sidenav',
  templateUrl: './account-sidenav.component.html',
  styleUrls: ['./account-sidenav.component.css']
})
export class AccountSidenavComponent implements OnInit,AfterViewInit {
  @ViewChild('drawer', { static: true }) drawer!: MatSidenav;

  ngAfterViewInit() {
     // this.drawer is NOW valid !!
     this.isHandset$.subscribe(isVisible => {
       if(isVisible) {
         this.drawer.close();
       }
     });
  }
  opened=false;
  id:any;
topics=[
  {routeName: 'user-details',topic:"User Details"},
  {routeName: 'user-orders',topic:"Orders"}, 
  
]
isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(private breakpointObserver: BreakpointObserver,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }



}
