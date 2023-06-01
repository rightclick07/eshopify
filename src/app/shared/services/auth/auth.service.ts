import { Injectable } from '@angular/core';
import { User } from '../../model/User';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SignupRequest } from '../../model/SignupRequest';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  private _isLoggedIn = new BehaviorSubject<boolean>(false);

  login_user(form: string) {
    if(localStorage.getItem("token")){
      this._isLoggedIn.next(true)
    }else{
      this._isLoggedIn.next(false)
    }
  }

  get isLoggedIn() {
      return this._isLoggedIn.asObservable();
  }

  login(credential:User):Observable<any>{
    return this.http.post<any>(environment.baseAuthLoginUrl, credential); 
  }

  signup(signupRequest:SignupRequest){

    return this.http.post<any>(environment.baseAuthSignupUrl, signupRequest);

  }

}
