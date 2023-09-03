import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminSidenavComponent } from './admin-core/admin-sidenav/admin-sidenav.component';
import { AdminDashboardComponent } from './admin-components/admin-dashboard/admin-dashboard.component';
import { BrandsComponent } from './admin-components/brands/brands.component';
import { CategoriesComponent } from './admin-components/categories/categories.component';
import { CouponsComponent } from './admin-components/coupons/coupons.component';
import { OrdersComponent } from './admin-components/orders/orders.component';
import { ProductsComponent } from './admin-components/products/products.component';
import { UsersComponent } from './admin-components/users/users.component';
import { ContactQueryComponent } from './admin-components/contact-query/contact-query.component';
import { JobPortalComponent } from './admin-components/job-portal/job-portal.component';
import { SellsManagementComponent } from './admin-components/sells-management/sells-management.component';
import { MaterialModule } from 'src/app/material/material.module';
import { AdminComponent } from './admin.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    AdminSidenavComponent,
    AdminDashboardComponent,
    BrandsComponent,
    CategoriesComponent,
    CouponsComponent,
    OrdersComponent,
    ProductsComponent,
    UsersComponent,
    ContactQueryComponent,
    JobPortalComponent,
    SellsManagementComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    HighchartsChartModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
