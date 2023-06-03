import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'; 
import { AuthService } from '../services/auth/auth.service';
import { ToastService } from '../services/toast-service/toast.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService,private toastService:ToastService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Add the bearer token to the request headers
    const token = localStorage.getItem("token");
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    // Handle errors
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.toastService.showError("Unauthorized Login")
        } else if (error.status === 403) {
          this.toastService.showError("Unauthorized Login")
        } else {
          this.toastService.showError(error.message)
          return throwError(error);
        }
        return throwError(error); // Return the error as an observable
      })
    );
  }
}

