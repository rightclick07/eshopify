import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit {
  @Output() quantityChange = new EventEmitter<number>();


  quantityForm:UntypedFormGroup={} as UntypedFormGroup
  constructor() { }

  ngOnInit(): void {
    this.quantityForm=new UntypedFormGroup({
      quantity:new UntypedFormControl(1,[])
    })
  }


  increaseQuantity(): void {
    this.quantityForm.value.quantity++;
    this.quantityChange.emit(this.quantityForm.value.quantity);

  }

  decreaseQuantity(): void {
    if (this.quantityForm.value.quantity > 1) {
      this.quantityForm.value.quantity--;
      this.quantityChange.emit(this.quantityForm.value.quantity);

    }
  }
}

