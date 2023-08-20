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

import { AuthGuard } from './shared/guard/auth-guard/auth.guard';
import { LoginGuard } from './shared/guard/login-guard/login.guard';
import { CartsComponent } from './common/carts/carts.component';
import { ProductComponent } from './common/product/product.component';
import { CartDataResolverResolver } from './shared/resolver/cart-data-resolver.resolver';
import { CheckoutComponent } from './common/checkout/checkout.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { FaqComponent } from './components/faq/faq.component';
import { BlogContentComponent } from './components/blogs/blog-content/blog-content.component';
import { ShippingReturnPolicyComponent } from './components/shipping-return-policy/shipping-return-policy.component';
import { FilterProductComponent } from './common/filter-product/filter-product.component';


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
    {path:"filter-product",component:FilterProductComponent},
    {path:"career",component:CareersComponent},
    {path:"privacy-policy",component:PrivacyPolicyComponent},
    {path:"shipping-return-policy",component:ShippingReturnPolicyComponent},
    {path:"faq",component:FaqComponent},
    {path:"cart",component:CartsComponent},
    {path:"checkout",component:CheckoutComponent},
    {path:"content",component:BlogContentComponent},
    {path:"product-details/:id",component:ProductComponent},
    {path:"account",loadChildren: () => import('./modules/account-module/account/account.module').then(m => m.AccountModule)},
    {path:"admin",loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)}
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
