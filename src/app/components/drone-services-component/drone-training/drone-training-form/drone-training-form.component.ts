import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-drone-training-form',
  templateUrl: './drone-training-form.component.html',
  styleUrls: ['./drone-training-form.component.css']
})
export class DroneTrainingFormComponent {
  droneTrainingForm!: FormGroup;

  constructor(private fb: FormBuilder ,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.droneTrainingForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(40)]],
      experience: ['', Validators.required],
      state: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
      city: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
      address: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      landmark: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]]
    });
  }

  submitForm(): void {
    if (this.droneTrainingForm.valid) {
      console.log('drone Training Form Data', this.droneTrainingForm.value);
      this.snackBar.open('Your form is submitted', 'Close', {
        duration: 3000
      });
      this.droneTrainingForm.reset();
      // window.location.reload();
    } else {

      console.log('Form is invalid. Please fill in all required fields.');
      alert('Form is invalid. Please fill in all required fields.');
    }
  }


}
