import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogsComponent } from './components/blogs/blogs.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CareersComponent } from './components/careers/careers.component';
import { LoginComponent } from './components/auth-component/login/login.component';
import { SignupComponent } from './components/auth-component/signup/signup.component';
import { ForgetPasswordComponent } from './components/auth-component/forget-password/forget-password.component';
import {HttpClientModule} from '@angular/common/http';
import { SpinnerComponent } from './common/spinner/spinner.component';
import { ProductCardComponent } from './common/product-card/product-card.component';
import { ProductQuantityComponent } from './common/product-quantity/product-quantity.component';
import { HorizontalCategoryScrollerComponent } from './common/horizontal-category-scroller/horizontal-category-scroller.component';
import { CategoryComponent } from './common/category/category.component';
import { SubCategoryComponent } from './common/sub-category/sub-category.component';
import { ProductComponent } from './common/product/product.component';
import { CartsComponent } from './common/carts/carts.component';
import { CheckoutComponent } from './common/checkout/checkout.component'
import {  HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './shared/interceptor/auth-interceptor.interceptor'; 
import { CartDataResolverResolver } from './shared/resolver/cart-data-resolver.resolver';
import { TableComponent } from './common/table/table.component';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from '@abacritt/angularx-social-login';
import { MenuSubmenuComponent } from './common/menu-submenu/menu-submenu.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { FaqComponent } from './components/faq/faq.component';
import { ImageSliderComponent } from './common/image-slider/image-slider.component';
import { BlogContentComponent } from './components/blogs/blog-content/blog-content.component';
import { SolarSystemComponent } from './components/solar-system/solar-system.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogsComponent,
    AboutUsComponent,
    ContactUsComponent,
    CareersComponent,
    LoginComponent,
    SignupComponent,
    ForgetPasswordComponent,
    SpinnerComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    HorizontalCategoryScrollerComponent,
    CategoryComponent,
    SubCategoryComponent,
    ProductComponent,
    CartsComponent,
    CheckoutComponent,
    TableComponent,
    MenuSubmenuComponent,
    PrivacyPolicyComponent,
    FaqComponent,
    ImageSliderComponent,
    BlogContentComponent,
    SolarSystemComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule
  
  ],
  providers: [CartDataResolverResolver,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              "653248834992-v8lj1ij1rebi2c6huil8u9lbqalh6jur.apps.googleusercontent.com"
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
