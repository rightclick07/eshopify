
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.css']
})
export class AdminSidenavComponent implements OnInit,AfterViewInit {
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
    {routeName: 'dashboard',topic:"Dashboard",icon:"dashboard"},
    {routeName: 'orders',topic:"Orders",icon:"receipt"},
    {routeName: 'users',topic:"Users",icon:"verified_user"},
    {routeName: 'products',topic:"Products",icon:"store"},
    {routeName: 'brands',topic:"Brands",icon:"branding_watermark"},
    {routeName: 'categories',topic:"Category",icon:"apps"},
    {routeName: 'coupons',topic:"Coupons",icon:"redeem"},
    {routeName: 'contact-query',topic:"Contact Query",icon:"query_builder"},
    {routeName: 'job-portal',topic:"Job Protal",icon:"work"},
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
