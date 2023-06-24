import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastService } from '../toast-service/toast.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList:any[]=[];
  public productList=new BehaviorSubject<any>([])
  constructor(private toastService:ToastService) { }

  getProduct(){
    return this.productList.asObservable();
  }

  setProduct(product:any){
     this.cartItemList.push(...product);
     this.productList.next(product)
  }

  addToCart(product:any){
    if(!this.cartItemList.includes(product)){
      console.log("Hello");
      
      this.cartItemList.push(product)
      this.productList.next(this.cartItemList);
      this.getTotalPrice();
    }else{
      this.toastService.showError("Already Added to Cart")
    }
   
    console.log(" this.cartItemList", this.cartItemList);
    
  }

  getTotalPrice(){
     let grandTotal=0;
     this.cartItemList.map((a:any)=>{
      grandTotal +=a.price;
     })
     return grandTotal
  }

  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id==a.id){
        this.cartItemList.splice(index,1)
      }
    })
  }

  removeAllCartItem(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList)
  }

}
