import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart-service/cart.service';
import { ProductService } from 'src/app/shared/services/product-service/product.service';
import { SpinnerService } from 'src/app/shared/services/spinner-service/spinner.service';
import { ToastService } from 'src/app/shared/services/toast-service/toast.service';

@Component({
  selector: 'app-bestseller-product-card',
  templateUrl: './bestseller-product-card.component.html',
  styleUrls: ['./bestseller-product-card.component.css']
})
export class BestsellerProductCardComponent implements OnInit {
 
       
  @Input() id!:number
  @Input() images!: string[];
  @Input() name!: string;
  // @Input() description!: string;
  @Input() price!: number;
  @Input() compareAtPrice!:number;
  @Input() discount!: number;
  selectedImage!: string;
  cartArray:any[]=[];

  selectedProduct: any;
  quantity: number = 1;

 
  constructor(private productService:ProductService,private router:Router,private toastService:ToastService,
    private cartService:CartService,private spinnerService:SpinnerService){
  }
  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.images);
    
    if (this.images && this.images.length > 0) {
      this.selectedImage = this.images[0];
    }
    
  }

  selectImage(image: string): void {
    this.selectedImage = image;
  }

  addToCart(id:number): void {
    if(localStorage.getItem("token")){
      // Implement your logic for adding the product to the cart
      this.spinnerService.show();
      this.productService.getproductById(id).subscribe((res:any)=>{
        if(res){
          this.spinnerService.hide();
          console.log("res?.payload",res?.payload);
          
            this.cartService.addToCart(res?.payload);
            this.toastService.showSuccess("Item Added To Cart SuccessFully!")
        }
      })
    }else{
      this.router.navigate(["/login"])
    }
    
    
  }
  navigateToProductDetails(id:any){
    this.router.navigate(["/product-details",id])
  }

}
