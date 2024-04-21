import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product-service/product.service';
import { SpinnerService } from 'src/app/shared/services/spinner-service/spinner.service';

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.css']
})
export class FilterProductComponent implements OnInit {
  id:any;
  constructor(private route: ActivatedRoute,private productService:ProductService,private spinnerService:SpinnerService) {}
  filteredProductList:any[]=[]
 ngOnInit() {
  this.route.params.subscribe(params => {
    this.id = params['id'];
    this.productService.getProductByCategorySubcategory('Drone',this.id).subscribe(
      res=>{
        if(res){
          this.spinnerService.hide();
          this.filteredProductList=res?.payload;
          for(let p of this.filteredProductList){
            let img=p.images
            let k=this.createListFromString(img.toString())
            p.images=k;
          }
        }
      });
    })
 
}
createListFromString(imgString:string){
  const arrayOfElements = imgString.split(',');
  return arrayOfElements;
}
}
