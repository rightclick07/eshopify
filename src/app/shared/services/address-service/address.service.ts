import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http:HttpClient) { }

  saveAddress(addressObject:any):Observable<any>{
    let url=environment.baseUrl+ "/saveAddress";
    return this.http.post<any>(url,addressObject)
    
  }

  getAddressByUserId(id:number):Observable<any>{
    let url=environment.baseUrl + "/getAddress/"+id;
    return this.http.get<any>(url);
  }

}
