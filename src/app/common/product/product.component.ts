import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, shareReplay } from 'rxjs';
import { Product } from 'src/app/shared/model/product';
import { CartService } from 'src/app/shared/services/cart-service/cart.service';
import { ProductService } from 'src/app/shared/services/product-service/product.service';
import { SpinnerService } from 'src/app/shared/services/spinner-service/spinner.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit,OnChanges {
  isSmallScreen$: Observable<boolean> | undefined;
  selectedImage!: string;
  isZoomed: boolean = false;
  startX!: number;
  startY!: number;
  offsetX: number = 0;
  offsetY: number = 0;
  selectedProduct: any;
   cartItemsArray: any[] = [];
  constructor(private route: ActivatedRoute,
    private productService:ProductService,
    private breakpointObserver: BreakpointObserver,
    private router:Router,
    private cartService:CartService,
    private spinnerService:SpinnerService) {}

  

  productdetails:any
  ngOnInit(): void {

    this.isSmallScreen$ = this.breakpointObserver.observe([Breakpoints.Handset,Breakpoints.Small, Breakpoints.XSmall])
    .pipe(
      map(result => result.matches)
    );

    this.route.params.subscribe(params => {
      const id = params['id']; // Retrieve the ID parameter from the route URL
      console.log(id);
      this.getProductById(id) // Display the ID in the console or perform further actions with it
      this.selectedImage = this.productdetails?.images[0];
    });
    
    console.log("this.productdetails",this.productdetails);
    
    console.log("this.selectedImage"+this.selectedImage);
    
  }

  getProductById(id:number){
    this.spinnerService.show();
      this.productService.getproductById(id).subscribe((res:any)=>{
        if(res){
          this.spinnerService.hide();
          this.productdetails=res?.payload;
          console.log(this.productdetails);
          let imgString=this.productdetails.images;
          let imageList=this.createListFromString(imgString);
          this.productdetails.images=imageList
          console.log(this.productdetails);
          this.selectedImage = this.productdetails?.images[0];
        }
          
      })
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(this.productdetails?.images);
    
    if (this.productdetails?.images && this.productdetails?.images.length > 0) {
      this.selectedImage = this.productdetails?.images[0];
      console.log("this.selectedImage",this.selectedImage);
      
    }
    
  }

  selectImage(image: string): void {
    this.selectedImage = image;
  }

  addToCart(productDetails:any): void {
    if(localStorage.getItem("token")){
        // Implement your logic for adding the product to the cart
       console.log('Product added to cart');
       this.cartService.addToCart(productDetails)
    }else{
       this.router.navigate(["/login"])
    }
  
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

  createListFromString(imgString:string){
    const arrayOfElements = imgString.split(',');
    return arrayOfElements;
  }

  convertToPointers(text: string): string {
    const lines = text?.split('\n');
    let convertedText = '';

    lines?.forEach(line => {
      if (line.trim() !== '') {
        convertedText += `<div>${line}</div>`;
      }
    });

    return convertedText;
  }

 checkout(productDetails:any){
    if(localStorage.getItem("token")){

      this.cartService.addToCart(productDetails);
      this.router.navigate(["/checkout"])
    }else{
      this.router.navigate(["/login"])
    }
  }
}
