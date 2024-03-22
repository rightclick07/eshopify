import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { AddressOptionComponent } from './address-option/address-option.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from 'src/app/common/table/table.component';
import { AppModule } from 'src/app/app.module';


@NgModule({
  declarations: [
    CheckoutComponent,
    AddressOptionComponent,
    OrderSummaryComponent,
    PaymentComponent,
    OrderConfirmationComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CheckoutModule { }
