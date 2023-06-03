import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { log } from 'console';

import { map, Observable, shareReplay, startWith } from 'rxjs';
import { UserProfile } from 'src/app/shared/model/UserProfile';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  FullName:any;
  isUserLoggedIn:boolean=false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router:Router,
    public authService:AuthService  
) {
  this.authService.isLoggedIn.subscribe(res=>{
    this.isUserLoggedIn=res;
    console.log(res);
    
  })

}
  showSocialForMobile=false;
  showSocialForweb=true;
  myControl = new FormControl();
  categoryList = [
    
    {
      title:"Drone",
      routeUrl: 'ai',
    },
    {
      title:"Camera",
      routeUrl: 'ai',
    }, 
    ];
    companyMenuList = [
      {
        title:"About Us",
        routeUrl:"about-us",
        icon:"info"
      },
      {
        title:"Contact Us",
        routeUrl:"contact-us",
        icon:"call"
      },
      {
        title:"Career",
        routeUrl:"career",
        icon:"flag"
      }
      ];
      userProfileMenuList = [
        {
          title:"Profile",
          routeUrl:"user-profile",
          icon:"person_add"
        },
        {
          title:"Logout",
          routeUrl:"",
          icon:"exit_to_app"
        }
        ];
  options: string[] = ['Drone','Camera','DJI Products'];
  filteredOptions: Observable<string[]> = new Observable<string[]>();
  selectedVal:any
  profile!: UserProfile[];
  badgeClass!: string;
  username:string="";
  token:string="";
  initial:string="";
  ngOnInit() {
    if(localStorage.getItem("token")){
      this.isUserLoggedIn=true
    }
    console.log( this.isUserLoggedIn+"this.isUserLoggedIn");
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
   this.username="Ravi.Kumar";
   this.token="";
   this.initial=this.getInitial(this.username)
   let user=this.getUserName(this.username)
   this.badgeClass=this.generateBadgeClass()

    this.profile=[
      {
        name:'option 1',
        code:user,
        badge:this.badgeClass
      },
      // {
      //   name:'option 2',
      //   code:'Change Password'
      // },
      {
        name:'option 3',
        code:'Logout'
      }
    ]

    
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  OnSearchCourse(element:string){
     let routeString=""
    for(let key of this.categoryList){
        if(key.title==element){
         routeString=key.routeUrl
        }
    }
    this.router.navigateByUrl(routeString)
  }
  getUserName(username:string){
    let userNameArr=username.split('.').map((elt:string)=>{
      return elt.charAt(0).toUpperCase() + elt.substr(1).toLowerCase()
    })
    return userNameArr.join(' ')
  }
getInitial(username:string){
   let firstName=username.split('.')[0];
   return firstName.charAt(0).toUpperCase();
}

  generateBadgeClass(){
    let badgeClasses=["primary","accent","warn"]
    let badgeIndex:number=Math.floor(Math.random()*4);
    let badgeClass=badgeClasses[badgeIndex]
    return badgeClass;
  }

  captureOnChange(){
    switch(this.selectedVal){

      case 'Change Password':
        break;

      case 'Logout':
       // this.logout() 
        break; 
       
       default:
        this. router.navigate(['/home']);
        break;
    }
  }


  OnclickProfile(key:string){

    if(key=="Logout"){
      localStorage.clear();
      this.isUserLoggedIn=false;
      this.router.navigate(["/login"])
    }
  }

}
