import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error, log } from 'console';
import { Subscription } from 'rxjs';
import { MobileLoginRequest } from 'src/app/shared/model/MobileLoginRequest';
import { VerifyOtpRequest } from 'src/app/shared/model/VerifyOtpRequest';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { SpinnerService } from 'src/app/shared/services/spinner-service/spinner.service';
import { ToastService } from 'src/app/shared/services/toast-service/toast.service';

function singleDigit(control: FormControl): { [s: string]: boolean } | null {
  const value = control.value;
  
  // Ensure that the value is not null before accessing its properties
  if (value === null || isNaN(value) || value < 0 || value > 9 || value.toString().length !== 1) {
    return { 'invalidDigit': true };
  }
  
  return null;
}

@Component({
  selector: 'app-mobile-number-login',
  templateUrl: './mobile-number-login.component.html',
  styleUrls: ['./mobile-number-login.component.css']
})
export class MobileNumberLoginComponent implements OnInit {
  mobileLoginForm!: FormGroup;
  otpForm!:FormGroup;
  userForm!:FormGroup;
  isLoginFormEnabled=false;
  isMobileinputEnabled=false;
  isOtpInputEnabled=false;
  isUserEnabled=false;
  globalError: string = '';
  
  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef>;
  @ViewChild('input1') input1!: ElementRef;
  @ViewChild('input2') input2!: ElementRef;
  @ViewChild('input3') input3!: ElementRef;
  @ViewChild('input4') input4!: ElementRef;
  signupSubscription$!: Subscription;
  username!: string;
  userid: any;

 
  constructor(private authService:AuthService,private spinnerService:SpinnerService,
    private toastService:ToastService,private router:Router
  ) { }

  ngOnInit(): void {
   this.initializeMobileloginForm();
   this.initializeOtpForm();
   this.initializeUserForm();
   this.otpForm.valueChanges.subscribe(() => {
    this.globalError = this.getGlobalErrorMessage();
  });
  }

 
  initializeMobileloginForm(){
    this.mobileLoginForm = new FormGroup({
      mobileNumber: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{10}$")])
    });
  }
  initializeOtpForm(){
    this.otpForm = new FormGroup({
      input1: new FormControl('', [Validators.required,singleDigit]),
      input2: new FormControl('', [Validators.required,singleDigit]),
      input3: new FormControl('', [Validators.required,singleDigit]),
      input4: new FormControl('', [Validators.required,singleDigit])
    });
  }
  initializeUserForm(){
    this.userForm = new FormGroup({
      emailId: new FormControl('', [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]),
      name: new FormControl('', [Validators.required,Validators.minLength(2)])
    });
  }
  getGlobalErrorMessage(): string {
    if (this.otpForm.invalid) {
      return 'Please Enter Valid OTP';
    }
    return '';
  }
  
  restrictToSingleDigit(event: KeyboardEvent, index: number): void {
    const input = event.target as HTMLInputElement;

    // Allow tab and backspace keys
    if (event.key === 'Tab' || event.key === 'Backspace') {
      return;
    }

    // Prevent input if the entered value is not a digit
    if (!/^\d$/.test(event.key)) {
      event.preventDefault();
    } else {
      // Move to the next input field automatically
      setTimeout(() => {
        if (index < this.otpInputs.length - 1) {
          this.otpInputs.toArray()[index + 1].nativeElement.focus();
        }
      }, 10);
    }
  }
  
  get mobileNumber() {
    return this.mobileLoginForm.get('mobileNumber');
  }

  // get otp() {
  //   return this.loginForm.get('otp');
  // }
  onClickOfLoginWithMobile(){
    this.isLoginFormEnabled=true;
    this.isMobileinputEnabled=true;
    this.isOtpInputEnabled=false;
    this.isUserEnabled=false;
  }
  onInput(input: any) {
    const maxLength = parseInt(input.getAttribute('maxlength') || '0');
    const nextInput = input.nextElementSibling;

    if (input.value.length >= maxLength && nextInput) {
      (nextInput as HTMLInputElement).focus();
    }
  }

  onSubmitMobileNumber(){
    this.isLoginFormEnabled=true;
    this.isMobileinputEnabled=false;
    this.isOtpInputEnabled=true;
    this.isUserEnabled=false;
    if (this.mobileLoginForm.valid) {
      const mobileloginRequest =
      {
        destinationMobileNumber:"+91"+this.mobileLoginForm?.value?.mobileNumber
      } 
      this.spinnerService.show();
      this.authService.sendMessageRequest(mobileloginRequest).subscribe(
        response=>{
          if(response){
            if(response?.message=='SUCCESS'){
              this.spinnerService.hide();
              console.log(response);
              this.toastService.showSuccess("Otp Sent Successfully!")
            }else if(response?.message=='FAILURE'){
              this.isLoginFormEnabled=true;
              this.isMobileinputEnabled=true;
              this.isOtpInputEnabled=false;
              this.isUserEnabled=false;
              this.spinnerService.hide();
              console.log(response);
              this.toastService.showError("Error while Sending Otp ! ")
          
            }
          }
      },
      error=>{
      console.log(error);
      
      }
    )
      // Handle login logic here
      console.log(this.mobileLoginForm.value);
    }
  }
  get emailId() {
    return this.userForm.get('emailId');
  }

  get name() {
    return this.userForm.get('name');
  }

  onSubmitUserForm(): void {
    if (this.userForm.valid) {
      const signupRequest={
        fullname:this.userForm?.value?.name,
        username:this.userForm?.value?.emailId,
        emailId:this.userForm?.value?.emailId,
        mobileNumber:"91"+this.mobileLoginForm?.value?.mobileNumber,
        address:"",
        password:"",
     } 
     this.signupSubscription$=this.authService.signup(signupRequest).subscribe(
       (response)=>{
         this.spinnerService.hide();
         console.log(response);
         if(response){
            this.toastService.showSuccess(response.message)
            console.log(response);
            this.authService.getuserbymobilenumber("91"+this.mobileLoginForm?.value?.mobileNumber).subscribe(
              response => {
                console.log(response?.payload);
                this.username = response?.payload?.username;
                this.userid=response?.payload?.id;
              if(this.username){
                localStorage.setItem("username",this.username);
                localStorage.setItem("userId",this.userid) ;

              }
              
              },
              error => {
                console.error('Error fetching user data', error);
              }

            );
              location.reload();
              this.toastService.showSuccess("Logged In SuccessFully")
              this.router.navigate(['/home'])
          }   
       })
   }
      console.log('Form Submitted', this.userForm.value);
  }
  onSubmitOtp(){
    const otp = this.otpForm.value.input1 + this.otpForm.value.input2 + this.otpForm.value.input3 + this.otpForm.value.input4;
    console.log("Verifying OTP:", otp);
    const verfifyOtpRequest={
      phoneNumber:"91"+this.mobileLoginForm?.value?.mobileNumber,
      otp:otp
    }
    this.spinnerService.show();
    this.authService.verifyOtp(verfifyOtpRequest).subscribe(
      response=>{
        if(response){
          if(response?.payload=='VERIFIED'){
            this.spinnerService.hide();
            console.log(response);
            this.authService.getuserbymobilenumber("91"+this.mobileLoginForm?.value?.mobileNumber).subscribe(
              response => {
                console.log(response?.payload);
                this.username = response?.payload?.username;
                this.userid=response?.payload?.id;
              if(this.username){
                localStorage.setItem("username",this.username);
                localStorage.setItem("userId",this.userid) 
              }
              
              },
              error => {
                console.error('Error fetching user data', error);
              }
            );
            this.toastService.showSuccess("OTP Verified");
          }else if(response?.payload=='NOT VERIFIED'){
            this.isLoginFormEnabled=true;
            this.isMobileinputEnabled=false;
            this.isOtpInputEnabled=true;
            this.isUserEnabled=false;
            this.spinnerService.hide();
            console.log(response);
            this.toastService.showSuccess("OTP Not Verified");
            this.otpForm.reset();
           
          }else if(response?.payload=='VERIFIED & MOBILE NUMBER ALREADY EXISTS'){
            this.spinnerService.hide();
            console.log(response);
            this.authService.getuserbymobilenumber("91"+this.mobileLoginForm?.value?.mobileNumber).subscribe(
              response => {
                console.log(response?.payload);
                this.username = response?.payload?.username;
                this.userid=response?.payload?.id;
              if(this.username){
                localStorage.setItem("username",this.username);
                localStorage.setItem("userId",this.userid) 
              }
              
              },
              error => {
                console.error('Error fetching user data', error);
              }
            );
              
              this.toastService.showSuccess("Logged In SuccessFully")
              this.router.navigate(['/home']);
              //location.reload();
             
          }else if(response?.payload=='NOT VERIFIED & MOBILE NUMBER ALREADY EXISTS'){
            this.isLoginFormEnabled=true;
            this.isMobileinputEnabled=false;
            this.isOtpInputEnabled=true;
            this.isUserEnabled=false;
            this.spinnerService.hide();
            this.otpForm.reset();
            console.log(response);
            this.toastService.showError("Enter Valid OTP");    
        } 
      }
    },
    error=>{
        console.log(error);
        
    })
    this.isLoginFormEnabled=true;
    this.isMobileinputEnabled=false;
    this.isOtpInputEnabled=false;
    this.isUserEnabled=true;
}

}
