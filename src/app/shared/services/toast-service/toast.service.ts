import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(private snackBar: MatSnackBar) {}

  
  private show(message: string, panelClass: string, duration: number = 6000,colorValue?:string): void {
    const config: MatSnackBarConfig = {
      duration: duration,
      panelClass: [panelClass]
    };
    this.snackBar.open(message, 'Close', config);
  }

  showSuccess(message: string, duration: number = 6000): void {
    this.show(message, 'toast-success', duration);
  }

  showError(message: string, duration: number = 6000): void {
    this.show(message, 'toast-error', duration);
  }
  
}
