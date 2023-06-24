import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation, MatStepperModule} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgSwitch, NgSwitchCase, AsyncPipe} from '@angular/common';
import { ToastService } from 'src/app/shared/services/toast-service/toast.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
 
})
export class CheckoutComponent implements OnInit {
  addressFormGroup:FormGroup={} as FormGroup
  paymentFormGroup:FormGroup={} as FormGroup
  ngOnInit(): void {

    this.addressFormGroup= new FormGroup({
      addressLine1:new FormControl("",[Validators.required]),
      addressLine2: new FormControl("",[]),
      city:new FormControl("",[Validators.required]),
      state: new FormControl("",[Validators.required]),
      postalCode: new FormControl("",[Validators.required])
    });
    this.paymentFormGroup= new FormGroup({
      cashOnDelivery:new FormControl("",[Validators.required]),
    });
  }
  
  stepperOrientation: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder,private toastService:ToastService, breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }
  placeOrder(){
    this.toastService.showSuccess("Order placed SuccessFully")
  }

}
