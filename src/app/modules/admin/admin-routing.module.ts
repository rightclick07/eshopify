import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-components/admin-dashboard/admin-dashboard.component';
import { OrdersComponent } from './admin-components/orders/orders.component';
import { UsersComponent } from './admin-components/users/users.component';
import { ProductsComponent } from './admin-components/products/products.component';
import { BrandsComponent } from './admin-components/brands/brands.component';
import { CategoriesComponent } from './admin-components/categories/categories.component';
import { CouponsComponent } from './admin-components/coupons/coupons.component';
import { ContactQueryComponent } from './admin-components/contact-query/contact-query.component';
import { JobPortalComponent } from './admin-components/job-portal/job-portal.component';
import { SellsManagementComponent } from './admin-components/sells-management/sells-management.component';

const routes: Routes = [
  {path:"",component:AdminComponent,
  children:[
    {path: '',component:AdminDashboardComponent},  
    {path: 'dashboard',component:AdminDashboardComponent},
    {path: 'orders',component:OrdersComponent},
    {path: 'sells',component:SellsManagementComponent},
    {path: 'users',component:UsersComponent},
    {path: 'products',component:ProductsComponent},
    {path: 'brands',component:BrandsComponent},
    {path: 'categories',component:CategoriesComponent},
    {path: 'coupons',component:CouponsComponent},
    {path: 'contact-query',component:ContactQueryComponent},
    {path: 'job-portal',component:JobPortalComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
