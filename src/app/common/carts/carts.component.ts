import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { log } from 'console';
import { CartService } from 'src/app/shared/services/cart-service/cart.service';
import { ProductService } from 'src/app/shared/services/product-service/product.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit,OnChanges {
  iscartEmpty:boolean=true
  grandTotal=0;
  tableColumns=["image","name","price"];
  dataSource!: MatTableDataSource<any>;
  constructor(private productService:ProductService, private cartService:CartService,private router:Router) {}
  cartItemsArray:any[]=[];
  ngOnInit(): void {
    this.cartService.getProduct().subscribe(res=>{
      console.log("res",res);
      
      this.cartItemsArray=res;
      if(this.cartItemsArray.length==0 && this.dataSource?.data?.length==0){
        this.iscartEmpty=true;
      }
      else{
        this.iscartEmpty=false;
      }
      for(let key of this.cartItemsArray){
        let images=key.images;
        if(typeof(images)=="string")
        key.images=this.createListFromString(images!)
      }
      console.log(this.cartItemsArray);
      
      this.grandTotal=this.cartService.getTotalPrice();
    })
    this.dataSource = new MatTableDataSource(this.cartItemsArray);
 
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }
  createListFromString(imgString:string){
    const arrayOfElements = imgString!.split(',');
    return arrayOfElements;
  }

  deleteRow(row: any) {
    // Remove the row from your data array
    const index = this.dataSource?.data?.indexOf(row);
    if (index > -1) {
      this.dataSource?.data?.splice(index, 1);
      this.cartService.removeCartItem(row);
      this.dataSource._updateChangeSubscription(); // Update the data source

      // Alternatively, you can reassign the data source
      // this.dataSource = new MatTableDataSource(this.dataSource.data);
    }
  }


  checkout(){
    if(localStorage.getItem("token")){
      this.router.navigate(["/checkout-module"])
    }else{
      this.router.navigate(["/login"])
    }
    
  }

  clearAll(){
    this.cartService.removeAllCartItem();
    this.dataSource._updateChangeSubscription();
  }
}
