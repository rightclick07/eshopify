import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'console';
import { CartService } from 'src/app/shared/services/cart-service/cart.service';
import { ProductService } from 'src/app/shared/services/product-service/product.service';
import { ToastService } from 'src/app/shared/services/toast-service/toast.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit,OnChanges {
  @Input() id!:number
  @Input() images!: string[];
  @Input() name!: string;
  @Input() description!: string;
  @Input() price!: number;
  @Input() compareAtPrice!:number;
  @Input() discount!: number;
  selectedImage!: string;
  cartArray:any[]=[];
  isZoomed: boolean = false;
  startX!: number;
  startY!: number;
  offsetX: number = 0;
  offsetY: number = 0;
  selectedProduct: any;
  quantity: number = 1;

 
  constructor(private productService:ProductService,private router:Router,private toastService:ToastService,
    private cartService:CartService){
  }

  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.images && this.images.length > 0) {
      this.selectedImage = this.images[0];
    }
    
  }

  selectImage(image: string): void {
    this.selectedImage = image;
  }

  addToCart(id:number): void {
    // Implement your logic for adding the product to the cart
   this.productService.getproductById(id).subscribe((res:any)=>{
       if(res){
           this.cartService.addToCart(res?.payload);
           this.toastService.showSuccess("Item Added To Cart SuccessFully!")
       }
   })
    
  }


  zoomInImage(): void {
    this.isZoomed = true;
  }

  zoomOutImage(): void {
    this.isZoomed = false;
    this.offsetX = 0;
    this.offsetY = 0;
  }

  moveImage(event: MouseEvent): void {
    if (this.isZoomed) {
      if (this.startX === undefined || this.startY === undefined) {
        this.startX = event.clientX;
        this.startY = event.clientY;
      } else {
        this.offsetX += event.clientX - this.startX;
        this.offsetY += event.clientY - this.startY;
        this.startX = event.clientX;
        this.startY = event.clientY;
      }
    }
  }

  onQuantityChange(quantity: number): void {
    this.quantity = quantity;
  }
  checkout(){}
}

