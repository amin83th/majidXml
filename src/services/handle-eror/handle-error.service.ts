import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  showError(message: string, action: string = 'بستن', duration: number = 5000): void {
    this.snackBar.open(message, action, {
      duration: duration,
      panelClass: ['error-snackbar'],
      direction: 'rtl' 
    });
  }

  showSuccess(message: string, action: string = 'بستن', duration: number = 3000): void {
    this.snackBar.open(message, action, {
      duration: duration,
      panelClass: ['success-snackbar'],
      direction: 'rtl'
    });
  }
}
