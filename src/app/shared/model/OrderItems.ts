export interface OrderItems{

    orderId:number;
    productId:number;
    quantity:number;
    unitPrice:number;
    discount:number;
    subtotal:number;
    tax:number;
    total:number;
    createdAt:Date;

}