import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  rememberMe = false;
  public forgetPasswordForm: FormGroup = {} as  FormGroup;

  constructor( private router: Router) {
    this.forgetPasswordForm = new FormGroup({
      emailId: new FormControl('', [Validators.required, Validators.minLength(6)]),
     });
  }

  ngOnInit(): void {
  }
  login(){}
}
