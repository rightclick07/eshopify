import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { AccountUserDetailsComponent } from './account-components/account-user-details/account-user-details.component';
import { AccountOrdersComponent } from './account-components/account-orders/account-orders.component';

const routes: Routes = [
  {path:"",component:AccountComponent,
    children:[
      {path: '',component:AccountUserDetailsComponent},  
      {path: 'user-details',component:AccountUserDetailsComponent},
      {path: 'user-orders',component:AccountOrdersComponent},
    ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
