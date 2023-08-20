import { Injectable } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  isLoading = false;

  constructor() {}

  show(): void {
    this.isLoading = true;
  }

  hide(): void {
    this.isLoading = false;
  }
}
