import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/model/product';
import { ProductService } from 'src/app/shared/services/product-service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private route: ActivatedRoute,private productService:ProductService) {}
  productdetails:Product={} as Product
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id']; // Retrieve the ID parameter from the route URL
      console.log(id);
      this.getProductById(id) // Display the ID in the console or perform further actions with it
    });
  }

  getProductById(id:number){
      this.productService.getproductById(id).subscribe((res:any)=>{
          this.productdetails=res?.payload;
          console.log(this.productdetails);
          
      })
  }

}
