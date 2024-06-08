import { Injectable } from '@angular/core';
import { User } from '../../model/User';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SignupRequest } from '../../model/SignupRequest';
import { MobileLoginRequest } from '../../model/MobileLoginRequest';
import { VerifyOtpRequest } from '../../model/VerifyOtpRequest';
import { AppConstant } from '../../constants/AppConstant';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  private _isLoggedIn = new BehaviorSubject<boolean>(false);

  login_user() {
    if(localStorage.getItem("username")){
      this._isLoggedIn.next(true)
    }else{
      this._isLoggedIn.next(false)
    }
  }

  get isLoggedIn() {
     this.login_user();
      return this._isLoggedIn.asObservable();
  }

  login(credential:User):Observable<any>{
    return this.http.post<any>(environment.baseAuthLoginUrl, credential); 
  }

  signup(signupRequest:SignupRequest){

    return this.http.post<any>(environment.baseAuthSignupUrl, signupRequest);

  }

  getUserById():Observable<any>{
     let id=localStorage.getItem("userId")
     const url=environment.baseUrl + "/getUser/"+ id;
     return this.http.get<any>(url)

  }

  sendMessageRequest(mobileLoginRequest:any):Observable<any>{
     return this.http.post<any>(environment.baseUrl+AppConstant.SEND_MESSAGE, mobileLoginRequest);
  }
  resendOtpRequest(mobileLoginRequest:any):Observable<any>{
    return this.http.post<any>(environment.baseUrl+AppConstant.RESEND_OTP, mobileLoginRequest);
 }
  verifyOtp(verifyOtpRequest:any):Observable<any>{
    return this.http.post<any>(environment.baseUrl+AppConstant.VERIFY_OTP, verifyOtpRequest);
 }

 getuserbymobilenumber(mobileNumber:string):Observable<any>{
  const encodedMobileNumber = encodeURIComponent(mobileNumber);
  let params = new HttpParams().set('mobileNumber', mobileNumber);
  return this.http.post<any>(environment.baseUrl+AppConstant.USER_BY_MOBILENUMBER,null, { params: params });
}


}
