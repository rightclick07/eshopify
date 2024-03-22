import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { log } from 'console';
import { Observable, map } from 'rxjs';
import { Order } from 'src/app/shared/model/Order';
import { OrderItems } from 'src/app/shared/model/OrderItems';
import { AddressService } from 'src/app/shared/services/address-service/address.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { CartService } from 'src/app/shared/services/cart-service/cart.service';
import { MailService } from 'src/app/shared/services/mail-service/mail.service';
import { OrderService } from 'src/app/shared/services/order-service/order.service';
import { PaymentService } from 'src/app/shared/services/payment-service/payment.service';
import { SpinnerService } from 'src/app/shared/services/spinner-service/spinner.service';
import { ToastService } from 'src/app/shared/services/toast-service/toast.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  isAddressPanelOpen:boolean=true;
  isOrderSummaryPanelOpen:boolean=false;
  isPaymentPanelOpen:boolean=false;
  isOrderConfirmationPanelOpen=false;
  isMobileSize: boolean | undefined;
  receiverEmail: any;
  custName: any;
  userId: any;
  minAmount = 1; // Minimum payment amount
  maxAmount = 1000000; // Maximum payment amount

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.isMobileSize = window.innerWidth < 768; // Adjust breakpoint as needed
  }
  selectedPaymentMethod: string = ''; // Initialize with an empty string

  
  addressFormGroup:UntypedFormGroup={} as UntypedFormGroup
  paymentForm:UntypedFormGroup={} as UntypedFormGroup;
  saveAddressFlag=false;
  addressList:any[]=[];
  selectedAddresses: any[] = [];
  newAddress=false;
  cartItemList:any[]=[]
  usedNumbers:any[]=[]
  orderDetails:any;
  orderItemsForMailArray:any[]=[];
  displayColumns=["name","price","quantity","brand"]
  ngOnInit(): void {

    this.addressFormGroup= new UntypedFormGroup({
      addressLine1:new UntypedFormControl("",[Validators.required]),
      addressLine2: new UntypedFormControl("",[]),
      city:new UntypedFormControl("",[Validators.required,Validators.minLength(2)]),
      state: new UntypedFormControl("",[Validators.required]),
      country:new UntypedFormControl("",[Validators.required]),
      postalCode: new UntypedFormControl("",[Validators.required,Validators.pattern('[0-9]{6}')]),
      phoneNumber: new UntypedFormControl("",[Validators.required,Validators.pattern('[0-9]{10}')]),
    });
    this.paymentForm= new UntypedFormGroup({
      amount:new UntypedFormControl("",[Validators.required,Validators.min(this.minAmount), Validators.max(this.maxAmount)])
    });

    this.getAddressByUser();
    this.cartService.getProduct().subscribe(res=>{
       this.cartItemList=res;
       console.log(this.cartItemList);
       
    })
  }
  
  stepperOrientation: Observable<StepperOrientation>;

  constructor(private _formBuilder: UntypedFormBuilder,
    private toastService:ToastService,
     breakpointObserver: BreakpointObserver,
     private addressService:AddressService,
     private cartService:CartService,
     private orderService:OrderService,
     private router:Router,
     private authService:AuthService,
     private spinnerService:SpinnerService,
     private mailService:MailService,
     private paymentService:PaymentService
     ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  saveAddress(addressFormGroup:FormGroup){
    console.log(addressFormGroup.value);
    let id=localStorage.getItem("userId");
    let username=localStorage.getItem("username");
    const addressObject={
      userId:id,
      username:username,
      address:addressFormGroup?.value?.addressLine1,
      city:addressFormGroup?.value?.city,
      state:addressFormGroup?.value?.state,
      country:addressFormGroup?.value?.country,
      postalCode:addressFormGroup?.value?.postalCode,
      phoneNumber:addressFormGroup?.value?.phoneNumber
    }

    this.spinnerService.show();
    this.addressService.saveAddress(addressObject).subscribe(res=>{
      if(res){
        this.spinnerService.hide();
        this.addressList.push(addressObject)
        this.saveAddressFlag=true;
        this.toastService.showSuccess(res?.payload)
      }
    })

  }

  placeOfflineOrder(){
    console.log(this.addressFormGroup);
    let custId=parseInt(localStorage.getItem("userId")!)
    const orderObj:Order={
      customerId:custId,
      orderDate:new Date(),
      totalAmount:this.getTotalAmount(),
      shippingAddress:this.getShippingAddress(),
      paymentMethod:this.getPaymentMethod(),
      paymentStatus:this.getPaymentStatus(),
      deliveryDate:this.calculateDeliveryDate(),
      trackingNumber:this.generateTrackingNumber().toString()
    }
    let orderItemsArray:any[]=[]
    console.log("orderObj",orderObj);
    this.spinnerService.show();
    this.orderService.saveOrders(orderObj!).subscribe(res=>{
      if(res){
        let orderId=res?.payload?.orderId;
        this.orderService.getOrder(orderId).subscribe(res=>{
            this.orderDetails=res?.payload;
            console.log("this.orderDetails",this.orderDetails);
            
        })
        for(let key of this.cartItemList){
          let orderItemObj:OrderItems={
            orderId: orderId,
            productId: key.id,
            productName: key.name,
            quantity: 1,
            unitPrice: key.price,
            discount: key.discount,
            subtotal: this.calculateSubtotal(key.price),
            tax: this.calculateTax(key.price),
            total: key.price,
            createdAt: new Date()
          }
          orderItemsArray.push(orderItemObj)
        }
        console.log("orderItemsArray",orderItemsArray);
        
        this.orderService.saveOrderItems(orderItemsArray).subscribe(res=>{
          if(res){
            this.spinnerService.hide();
            this.orderService.getOrderItemsByOrderId(orderId).subscribe(res=>{
              if(res){
                 this.orderItemsForMailArray=res?.payload;
                 if(this.orderItemsForMailArray){
                  this.sendMailToCustomer();
                  this.sendMailToEverse();
                 }

              }
            })
            this.isAddressPanelOpen=false;
            this.isOrderSummaryPanelOpen=false;
            this.isPaymentPanelOpen=false;
            this.isOrderConfirmationPanelOpen=true;
            this.toastService.showSuccess("Order Placed Successfully!!!");
            this.cartService.removeAllCartItem();
          }
        })
      }
    })

    
    
  }

  placeOnlineOrder(){
    // Generate merchantTransactionId and merchantUserId
    const merchantTransactionId = 'EV' + Math.floor(Math.random() * 10000000000).toString();
    const merchantUserId = 'EVID' + Math.floor(Math.random() * 1000000).toString();

    const payRequest={
    "merchantId": "PGTESTPAYUAT91",
    "merchantTransactionId": "MT7850590068188114",
    "merchantUserId": "MUID123",
    "amount": 10000,
    "redirectUrl": "https://webhook.site/redirect-url",
    "redirectMode": "POST",
    "callbackUrl": "https://webhook.site/callback-url",
    "mobileNumber": "9999999999",
    "paymentInstrument": {
      "type": "PAY_PAGE"
    }
  }
    console.log(payRequest);
    
     this.paymentService.sendPayment(payRequest).subscribe(
      res=>{
        console.log(res);
        
      }
     )

  }


  getAddressByUser(){
    let id=localStorage.getItem("userId");
    this.spinnerService.show();
    this.addressService.getAddressByUserId(parseInt(id!)).subscribe(
      res=>{
        this.spinnerService.hide();
        console.log(res?.payload);
        this.addressList=res?.payload
      }
    )
  }
  usethisaddress(selectedAddress:any){
    console.log("selectedAddress",selectedAddress);
    
    if(selectedAddress){
      this.toastService.showSuccess("Address is selected")
    }

  }
  addNewAddress(){
    this.newAddress=true
  }
  selectAddress(event: any) {
    this.selectedAddresses.push(event.value);
    console.log(this.selectedAddresses,"this.selectedAddresses");
    
  }
  clickToContinueProductSummary(){
    this.isAddressPanelOpen=false;
    this.isOrderSummaryPanelOpen=true;
    this.isPaymentPanelOpen=false;
    this.isOrderConfirmationPanelOpen=false;
  }
  proceedToPay(){
    this.isAddressPanelOpen=false;
    this.isOrderSummaryPanelOpen=false;
    this.isPaymentPanelOpen=true;
    this.isOrderConfirmationPanelOpen=false;
  }
  toggleSelected(option: any) {
    const index = this.selectedAddresses.indexOf(option);
  
    if (index >= 0) {
      this.selectedAddresses.splice(index, 1);
    } else {
      this.selectedAddresses = [option];
    }
  }
  
  getTotalAmount(){
    let amount=0;
    for(let key of this.cartItemList){
      amount+=key.price;
    }
    return amount;
  }
  getPaymentMethod(){
    let paymentMethod=""
    if (this.selectedPaymentMethod === 'online') {
      paymentMethod="online";
    } else if (this.selectedPaymentMethod === 'cod') {
      paymentMethod="offline";
    }
    return paymentMethod;
  }
  getShippingAddress(){
   let  addressString="";

    console.log(this.selectedAddresses);
    console.log(this.addressFormGroup);
    if(this.selectedAddresses){
       
      addressString=this.selectedAddresses[0].address + " " +
      this.selectedAddresses[0].city + " "+
      this.selectedAddresses[0].state + " "+
      this.selectedAddresses[0].country + "-"+
      this.selectedAddresses[0].postalCode + " Mobile No : "+
      this.selectedAddresses[0].phoneNumber 
      
    }
    
   return addressString;
  }

  generateTrackingNumber(): number {
    const min = 100; // Minimum number
    const max = 9999; // Maximum number
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    while (this.usedNumbers.includes(randomNumber)) {
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    this.usedNumbers.push(randomNumber);
    return randomNumber;
  }
  calculateDeliveryDate(): Date {
    let orderDate=new Date();
    const deliveryDate = new Date(orderDate);
    deliveryDate.setDate(deliveryDate.getDate() + 5);
    return deliveryDate;
  }


  getPaymentStatus(){
    let paymentStatus="";
    if(this.selectedPaymentMethod === 'cod'){
        paymentStatus="pending";
    }
    
    return paymentStatus;
  }

  calculateTax(total:number): number {
    const taxRate = 0.18; // Assuming a tax rate of 18%
    return total * taxRate;
  }

  calculateSubtotal(total:number): number {
    const tax = this.calculateTax(total);
    return total - tax;
  }



  submitPayment() {
    if (this.selectedPaymentMethod === 'online') {
      // Handle online payment submission
      this.placeOnlineOrder();
      alert('Processing online payment...');
    } else if (this.selectedPaymentMethod === 'cod') {
      // Handle offline payment submission
      this.placeOfflineOrder();
    } else {
      alert('Please select a payment method.');
    }
  }
 
  sendMailToCustomer(){
    let senderMail="everse.order@gmail.com"
    this.authService.getUserById().subscribe(
      res=>{
        if(res){
          console.log("rss",res?.payload);
          
          this.receiverEmail=res?.payload?.email;
          console.log("this.receiverEmail",this.receiverEmail);
          
          this.custName=res?.payload?.fullName;
          console.log("this.custName",this.custName);
          
          this.userId=res?.payload?.id;
          console.log("this.userId",this.userId);
          const mailRequest={
            senderEmail:senderMail,
            receiverEmail:this.receiverEmail,
            subject:"Order Confirmation From Everse",
            customerName:this.custName,
            customerId:this.userId,
            orderRequest:this.orderDetails,
            orderItemsRequestList:this.orderItemsForMailArray
          }
          console.log("this.cartItemList",this.orderItemsForMailArray);
          
          console.log("mail",mailRequest);
          
         this.mailService.sendMail(mailRequest).subscribe(res=>{
          if(res){
            this.toastService.showSuccess(res?.payload)
          }
         })
        }
      }
    )
   

  }
  sendMailToEverse(){
    let senderMail="everse.order@gmail.com"
    this.authService.getUserById().subscribe(
      res=>{
        if(res){
          console.log("rss",res?.payload);
          
          this.receiverEmail="sales.everse@gmail.com";
          console.log("this.receiverEmail",this.receiverEmail);
          
          this.custName="Everse Sales team";
          console.log("this.custName",this.custName);
          
          this.userId=res?.payload?.id;
          console.log("this.userId",this.userId);
          const mailRequest={
            senderEmail:senderMail,
            receiverEmail:this.receiverEmail,
            subject:"Order Confirmation From Everse",
            customerName:this.custName,
            customerId:this.userId,
            orderRequest:this.orderDetails,
            orderItemsRequestList:this.orderItemsForMailArray
          }
          console.log("this.cartItemList",this.orderItemsForMailArray);
          
          console.log("mail",mailRequest);
          
         this.mailService.sendMail(mailRequest).subscribe(res=>{
          if(res){
            if(res?.payload)
            this.toastService.showSuccess("Mail Sent to Everse Team")
          }
         })
        }
      }
    )
   

  }
}
