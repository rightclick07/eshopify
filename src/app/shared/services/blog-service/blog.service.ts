import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }

  getAllProductList():Observable<any>{
    let url=environment.baseUrl +"/getAllBlogs";
    return this.http.get<any>(url);
 }
 getproductById(id:number):Observable<any>{
    let url=environment.baseUrl +"/getBlogById/" + id;
    return this.http.get<any>(url);
 }
}
