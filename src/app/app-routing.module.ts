import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ForgetPasswordComponent } from './components/auth-component/forget-password/forget-password.component';
import { LoginComponent } from './components/auth-component/login/login.component';
import { SignupComponent } from './components/auth-component/signup/signup.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';

import { LoginGuard } from './shared/guard/login-guard/login.guard';
import { CartsComponent } from './common/carts/carts.component';
import { ProductComponent } from './common/product/product.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { FaqComponent } from './components/faq/faq.component';
import { BlogContentComponent } from './components/blogs/blog-content/blog-content.component';
import { ShippingReturnPolicyComponent } from './components/shipping-return-policy/shipping-return-policy.component';
import { FilterProductComponent } from './common/filter-product/filter-product.component';
import { DeliveryShippingPolicyComponent } from './components/delivery-shipping-policy/delivery-shipping-policy.component';
import { SeriesComponent } from './common/series/series.component';
import { GlobalSearchComponent } from './common/global-search/global-search.component';
import { DroneRepairComponent } from './components/drone-services-component/drone-repair/drone-repair.component';
import { DroneRentComponent } from './components/drone-services-component/drone-rent/drone-rent.component';
import { DroneTrainingComponent } from './components/drone-services-component/drone-training/drone-training.component';
import { DronePioletLicenseComponent } from './components/drone-services-component/drone-piolet-license/drone-piolet-license.component';
import { DroneGetUinComponent } from './components/drone-services-component/drone-get-uin/drone-get-uin.component';
import { DroneTrainingFormComponent } from './components/drone-services-component/drone-training/drone-training-form/drone-training-form.component';
import { ProductDetailComponent } from './common/product-detail/product-detail.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent,canActivate: [LoginGuard]},
    {path: 'forget-password', component: ForgetPasswordComponent},
    {path:"blogs/:id",component:BlogContentComponent},
    {path:"blogs",component:BlogsComponent},
    {path:"about-us",component:AboutUsComponent},
    {path:"contact-us",component:ContactUsComponent},
    {path:"filter-product/:id",component:FilterProductComponent},
    {path:"career",component:CareersComponent},
    {path:"privacy-policy",component:PrivacyPolicyComponent},
    {path:"shipping-return-policy",component:ShippingReturnPolicyComponent},
    {path:"delivery-shipping-policy",component:DeliveryShippingPolicyComponent},
    {path:"faq",component:FaqComponent},
    {path:"cart",component:CartsComponent},
    // {path:"checkout",component:CheckoutComponent},
    {path:"content",component:BlogContentComponent},
    {path:"search",component:GlobalSearchComponent},
    {path:"product-details/:id",component:ProductDetailComponent},
    {path:"series/:id",component:SeriesComponent},
    {path:"drone-repair",component:DroneRepairComponent},
    {path:"drone-rent",component:DroneRentComponent},
    {path:"drone-training",component:DroneTrainingComponent},
    {path:"drone-training-form", component:DroneTrainingFormComponent},
    {path:"drone-piolet-license",component:DronePioletLicenseComponent},
    {path:"drone-get-uin",component:DroneGetUinComponent},
    {path:"account",loadChildren: () => import('./modules/account-module/account/account.module').then(m => m.AccountModule)},
    {path:"admin",loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)},
    {path:"checkout-module",loadChildren: () => import('./modules/checkout-module/checkout/checkout.module').then(m => m.CheckoutModule)}

// {path: 'admin', component: DashboardComponent,
//   canActivate: [RoleGuardService],
//   data: {roles: 'ROLE_ADMIN'},
//   children: [
//     {path: 'products', component: ProductsManagmentComponent},
//     {path: 'orders', component: OrdersListComponent},
//     {path: 'categories', component: CategoriesComponent}
//   ]
// },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
