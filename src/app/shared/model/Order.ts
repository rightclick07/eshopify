import { OrderItems } from "./OrderItems";

export interface Order{
   orderId?:number;
   customerId:number ;
   orderDate:Date ;
   totalAmount:number;
   shippingAddress:string;
   paymentMethod:string;
   paymentStatus:string;
   deliveryDate:Date;
   trackingNumber:string;

}