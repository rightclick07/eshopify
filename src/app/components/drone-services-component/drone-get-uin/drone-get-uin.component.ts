import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-drone-get-uin',
  templateUrl: './drone-get-uin.component.html',
  styleUrls: ['./drone-get-uin.component.css']
})
export class DroneGetUinComponent {
  droneUinForm!: FormGroup;


  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.droneUinForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^((\+91-?)|0)?[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(40)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]]
    });
  }

  submitForm() {
    if (this.droneUinForm.valid) {
      console.log('drone Uin Form Data', this.droneUinForm.value);
      this.snackBar.open('Your Comment is submitted', 'Close', {
        duration: 3000
      });
      this.droneUinForm.reset();
      // window.location.reload();
    } else {
      console.error('Form is invalid. Please fill in all required fields.');
      alert('Form is invalid. Please fill in all required fields.');
    }
  }
}
