import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { SpinnerService } from 'src/app/shared/services/spinner-service/spinner.service';

@Component({
  selector: 'app-account-user-details',
  templateUrl: './account-user-details.component.html',
  styleUrls: ['./account-user-details.component.css']
})
export class AccountUserDetailsComponent implements OnInit {
   userDetails!:any;
  constructor(private authService:AuthService,private spinnerService:SpinnerService) { }

  ngOnInit(): void {
    this.getUserDetail();
  }

  getUserDetail(){
    this.spinnerService.show();
    this.authService.getUserById().subscribe(res=>{
      if(res){
        this.spinnerService.hide();
        console.log(res?.payload); 
        this.userDetails=res?.payload;
      }
      
    })
  }

}
