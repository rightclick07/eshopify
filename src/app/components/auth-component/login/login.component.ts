import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { log } from 'console';
import { Subscription } from 'rxjs';
import { ResponseData } from 'src/app/shared/model/ResponseData';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { SpinnerService } from 'src/app/shared/services/spinner-service/spinner.service';
import { ToastService } from 'src/app/shared/services/toast-service/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hidePassword = true;
  rememberMe = false;
  public loginForm: FormGroup = {} as  FormGroup;
  loginSubscription$:Subscription={} as Subscription 
  userInfo!:SocialUser
  constructor( private router: Router,
     private authService:AuthService,
     private spinnerService:SpinnerService,
     private toastService:ToastService,
     private authGoogleService:SocialAuthService
     ){}

  ngOnInit(): void {
    this.intilalizeForm();
  }
  

  /* This method is used to intialize the form  */
   intilalizeForm(){
      this.loginForm = new FormGroup({
        username: new FormControl('', [Validators.required, Validators.minLength(6)]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        checkbox: new FormControl(false) 
      });
    }

 /* This method is used to submit login data */
  OnLogin(){
   let credential={
      username:this.loginForm?.value?.username,
      password:this.loginForm?.value?.password
   }
   this.spinnerService.showSpinner();
   console.log(this.loginForm.value)
   this.loginSubscription$=this.authService.login(credential).subscribe(
    (response:ResponseData<any>)=>{
      if(response){
        this.spinnerService.hideSpinner();
      console.log(response);
      let token=response.payload?.token;
      let username=response.payload?.username
      if(token){
        localStorage.setItem("token",token)
        localStorage.setItem("username",username)
        location.reload();
        this.toastService.showSuccess("Logged In SuccessFully")
        this.router.navigate(['/home'])
      }else{
        this.toastService.showSuccess("Invalid Credential")
        this.router.navigate(['/login'])
      }
      
    }
      
    })

  }
  signInWithGoogle(): void {
    console.log("hello");
    
    this.authGoogleService?.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((user) => {
        // Handle successful sign-in
        console.log(user);
        
      })
      .catch((error) => {
        // Handle error
        console.log(error);
        
      });
  }
  

}
