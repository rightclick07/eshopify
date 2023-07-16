
import { Component, OnInit } from '@angular/core';

import {AbstractControl, FormBuilder, UntypedFormControl, UntypedFormGroup, FormGroupDirective, NgForm, ValidatorFn, Validators} from '@angular/forms';

import {Router} from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Subscription } from 'rxjs';
import { SpinnerService } from 'src/app/shared/services/spinner-service/spinner.service';
import { ToastService } from 'src/app/shared/services/toast-service/toast.service';
import { ResponseData } from 'src/app/shared/model/ResponseData';



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent?.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  hidePassword = true;
  signupSubscription$:Subscription={} as Subscription;
  public signupForm: UntypedFormGroup = {} as  UntypedFormGroup;
 // Regular expression pattern for email validation
 emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  // Regular expression pattern for mobile number validation
  mobilePattern = /^[0-9]{10}$/;
  constructor( private router: Router,private authService:AuthService,
    private spinnerService:SpinnerService,private toastService:ToastService) {
  }

  ngOnInit(): void {
    this.intializeForm();
  }

  intializeForm(){
    this.signupForm = new UntypedFormGroup({
      name: new UntypedFormControl('', [Validators.required, Validators.minLength(3)]),
      emailId: new UntypedFormControl('', [Validators.required, Validators.minLength(8),Validators.pattern(this.emailPattern)]),
      mobileNumber: new UntypedFormControl('', [Validators.required, Validators.minLength(10),Validators.pattern(this.mobilePattern)]),
      address: new UntypedFormControl('', [ Validators.minLength(6)]),
      password: new UntypedFormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new UntypedFormControl('', [Validators.required, Validators.minLength(8)]),
    },{ validators: this.passwordMatchValidator }
    );
  }


  get email(): AbstractControl {
    return this.signupForm.get('email')!;
  }

  get password(): AbstractControl {
    return this.signupForm.get('password')!;
  }

  get confirmPassword(): AbstractControl {
    return this.signupForm.get('confirmPassword')!;
  }


  passwordMatchValidator: ValidatorFn = (control: AbstractControl) => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
  
    if (password?.value !== confirmPassword?.value) {
      confirmPassword?.setErrors({ passwordMismatch: true });
    } else {
      confirmPassword?.setErrors(null);
    }
  
    return null;
  };
   
  onSignup(){
    console.log("signupForm",this.signupForm.value);
    const signupRequest={
       fullname:this.signupForm?.value?.name,
       username:this.signupForm?.value?.emailId,
       emailId:this.signupForm?.value?.emailId,
       mobileNumber:this.signupForm?.value?.mobileNumber,
       address:this.signupForm?.value?.address,
       password:this.signupForm?.value?.password,
    }
 
    
    this.signupSubscription$=this.authService.signup(signupRequest).subscribe(
      (response:ResponseData<any>)=>{
        this.spinnerService.hideSpinner();
        console.log(response);
        if(response){
          this.toastService.showSuccess(response.payload)
          this.router.navigate(["/login"])
        }
        
      })
  }
}
