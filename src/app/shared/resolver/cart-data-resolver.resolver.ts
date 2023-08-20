import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductService } from '../services/product-service/product.service';
import { CartService } from '../services/cart-service/cart.service';

@Injectable({
  providedIn: 'root'
})
export class CartDataResolverResolver implements Resolve<any> {
 constructor(private cartService: CartService,private router:Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    // Fetch the data from your data service
    console.log("resolve");
    return this.cartService.getProduct()
  }
}
