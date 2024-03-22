import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http:HttpClient) { }

  sendMail(mailRequest:any):Observable<any>{
    let url=environment.baseUrl + "/sendMail"
     return this.http.post<any>(url,mailRequest);
  }

}
