import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { AccountSidenavComponent } from './account-core/account-sidenav/account-sidenav.component';
import { AccountOrdersComponent } from './account-components/account-orders/account-orders.component';
import { MaterialModule } from 'src/app/material/material.module';
import { AccountUserDetailsComponent } from './account-components/account-user-details/account-user-details.component';


@NgModule({
  declarations: [
    AccountComponent,
    AccountSidenavComponent,
    AccountOrdersComponent,
    AccountUserDetailsComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MaterialModule
  ]
})
export class AccountModule { }
