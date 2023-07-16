import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  rememberMe = false;
  public forgetPasswordForm: UntypedFormGroup = {} as  UntypedFormGroup;

  constructor( private router: Router) {
    this.forgetPasswordForm = new UntypedFormGroup({
      emailId: new UntypedFormControl('', [Validators.required, Validators.minLength(6)]),
     });
  }

  ngOnInit(): void {
  }
  login(){}
}
