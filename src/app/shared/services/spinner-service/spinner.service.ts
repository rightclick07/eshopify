import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private spinnerSubject = new Subject<boolean>();
  public spinnerState = this.spinnerSubject.asObservable();

  showSpinner(): void {
    this.spinnerSubject.next(true);
  }

  hideSpinner(): void {
    this.spinnerSubject.next(false);
  }
}
