import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-drone-rent',
  templateUrl: './drone-rent.component.html',
  styleUrls: ['./drone-rent.component.css']
})
export class DroneRentComponent implements OnInit {
  rentDroneForm!: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.rentDroneForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      mobileNumber: ['', [Validators.required, Validators.minLength(10), Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(40)]],
      state: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
      city: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
      address: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      landmark: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      model: ['', Validators.required],
      pickupDate: ['', [Validators.required, this.minDateValidator()]],
      returnDate: ['', [Validators.required, this.minDateValidator(),]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]]
    });
  }





  minDateValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const selectedDate = new Date(control.value);
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);

      if (selectedDate < currentDate) {
        return { 'minDate': true };
      }
      return null;
    };
  }



  onSubmit() {
    if (this.rentDroneForm.valid) {
      console.log('rent Drone Form Data:', this.rentDroneForm.value);
      this.snackBar.open('Your form is submitted', 'Close', {
        duration: 3000
      });
      this.rentDroneForm.reset();
      // window.location.reload();
    } else {
      console.error('Form is invalid. Please fill in all required fields.');
      alert('Form is invalid. Please fill in all required fields.');
    }


  }
}
