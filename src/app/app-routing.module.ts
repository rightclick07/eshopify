import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginComponent } from './components/auth-component/login/login.component';
import { SignupComponent } from './components/auth-component/signup/signup.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/product/cart/cart.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    {path:"blogs",component:BlogsComponent},
    {path:"about-us",component:AboutUsComponent},
    {path:"contact-us",component:ContactUsComponent},
    {path:"career",component:CareersComponent},
    {path:"cart",component:CartComponent},
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
