import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order-service/order.service';
import { SpinnerService } from 'src/app/shared/services/spinner-service/spinner.service';

@Component({
  selector: 'app-account-orders',
  templateUrl: './account-orders.component.html',
  styleUrls: ['./account-orders.component.css']
})
export class AccountOrdersComponent implements OnInit {

  orderList:any[]=[];

  constructor(private orderService:OrderService,private spinnerService:SpinnerService) { }
  
  ngOnInit(): void {
    this.getAllOrdersByUser();
  }

  getAllOrdersByUser(){
    this.spinnerService.show();
    this.orderService.getAllOrdersByUser().subscribe(res=>{
      if(res){
        this.spinnerService.hide();
        this.orderList=res?.payload
      }
      
    })
  }

}
