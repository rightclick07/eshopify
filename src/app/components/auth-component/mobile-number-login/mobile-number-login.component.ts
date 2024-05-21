import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

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
  isLoginFormEnabled=false;
  isMobileinputEnabled=false;
  isOtpInputEnabled=false;
  globalError: string = '';
  @ViewChild('input1') input1!: ElementRef;
  @ViewChild('input2') input2!: ElementRef;
  @ViewChild('input3') input3!: ElementRef;
  @ViewChild('input4') input4!: ElementRef;

 
  constructor() { }

  ngOnInit(): void {
   this.initializeMobileloginForm();
   this.initializeOtpForm();
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
  getGlobalErrorMessage(): string {
    if (this.otpForm.invalid) {
      return 'Please Enter Valid OTP';
    }
    return '';
  }
  restrictToSingleDigit(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    const inputValue = input.value;
  
    // Allow tab key
    if (event.key === 'Tab') {
      return;
    }
  
    // Allow backspace key
    if (event.key === 'Backspace') {
      return;
    }
  
    // Prevent input if the length is already 1 or if the entered value is not a digit
    if (inputValue.length >= 1 || !/^\d$/.test(event.key)) {
      event.preventDefault();
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

    if (this.mobileLoginForm.valid) {
      // Handle login logic here
      console.log(this.mobileLoginForm.value);
    }
  }
  onSubmitOtp(){
    const otp = this.otpForm.value.input1 + this.otpForm.value.input2 + this.otpForm.value.input3 + this.otpForm.value.input4;
    console.log("Verifying OTP:", otp);
  }

}
