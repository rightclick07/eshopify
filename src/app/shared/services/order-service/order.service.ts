import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../../model/Order';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { OrderItems } from '../../model/OrderItems';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }


  saveOrders(order:Order):Observable<any>{

    let url=environment.baseUrl + "/saveOrder";
    return this.http.post<any>(url,order);
  }

  saveOrderItems(orderItems:OrderItems[]):Observable<any>{   
    let url=environment.baseUrl + "/saveOrderItems";
    return this.http.post<any>(url,orderItems);
  }

  getOrder(id:number):Observable<any>{   
    let url=environment.baseUrl + "/getOrder/"+id;
    return this.http.get<any>(url);
  }


}
