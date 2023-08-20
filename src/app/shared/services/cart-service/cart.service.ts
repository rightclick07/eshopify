import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastService } from '../toast-service/toast.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: any[] = [];
  public cartItemList:any[]=[];
  public productList=new BehaviorSubject<any>([])
  constructor(private toastService:ToastService) { 
    this.loadCartFromLocalStorage();
  }


  getProduct(){
    return this.productList.asObservable();
  }

  setProduct(product:any){
     this.cartItemList.push(...product);
     this.productList.next(product)
     this.saveCartToLocalStorage();
  }

  addToCart(product:any){
    if(!this.cartItemList.includes(product)){
      this.cartItemList.push(product)
      this.productList.next(this.cartItemList);
      this.saveCartToLocalStorage();
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
    localStorage.setItem('cart', JSON.stringify(this.cartItemList));
  }

  removeAllCartItem(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList)
    localStorage.setItem('cart', JSON.stringify(this.cartItemList));
  }

  private saveCartToLocalStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this.cartItemList));
  }
  private loadCartFromLocalStorage(): void {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cartItemList = JSON.parse(savedCart);
      this.productList.next(this.cartItemList);
    }
  }

}
