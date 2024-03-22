import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, flatMap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }

  sendPayment(paymentData: any): Observable<any> {
     const url=environment.baseUrl +"/process-payment";
        // Send the payment data to the backend
        return this.http.post<any>(url,paymentData);
     
  }

 


}
