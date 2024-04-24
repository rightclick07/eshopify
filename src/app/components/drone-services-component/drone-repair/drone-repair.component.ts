import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-drone-repair',
  templateUrl: './drone-repair.component.html',
  styleUrls: ['./drone-repair.component.css']
})
export class DroneRepairComponent implements OnInit {
  droneRepairForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.droneRepairForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      mobileNumber: ['', [Validators.required, Validators.minLength(10), Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(40)]],
      modelName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      modelSeriesNumber: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]], // Added modelSeriesNumber control
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]]
    });
  }





  onSubmit() {
    if (this.droneRepairForm.valid) {
      console.log('Form values:', this.droneRepairForm.value);
      this.snackBar.open('Your form has been submitted!', 'Close', {
        duration: 3000
      });
    } else {
      console.error('Form is invalid. Please fill in all required fields.');
    }
  }
}

