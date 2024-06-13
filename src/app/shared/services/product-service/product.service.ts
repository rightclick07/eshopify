import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../../model/product';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
   providedIn: 'root'
})
export class ProductService {

   constructor(private http: HttpClient) { }

   getAllProductList(): Observable<Product[]> {
      let url = environment.baseUrl + "/getAllProductList";
      return this.http.get<Product[]>(url);
   }
   getproductById(productId: number): Observable<Product> {
      let url = environment.baseUrl + "/getProductById/" + productId;
      return this.http.get<Product>(url);
   }

   getProductByCategorySubcategory(productType?: string, category?: string): Observable<any> {
      const url = `${environment.baseUrl}/getProductsByCategoryAndSubCategory`;
      const queryParams = `?productType=${productType}&category=${category}`;
      return this.http.get<any>(url + queryParams);
   }

}
