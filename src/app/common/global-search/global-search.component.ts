import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/model/product';
import { ProductService } from 'src/app/shared/services/product-service/product.service';
import { ToolbarService } from 'src/app/shared/services/toolbar/toolbar.service';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.css']
})
export class GlobalSearchComponent implements OnInit {
  productList:Product[]=[]
  @ViewChild('searchbar') searchbar!: ElementRef;
  searchText = '';

  constructor(private productService:ProductService,private router:Router,public toolbarService:ToolbarService){}

  ngOnInit(): void {
    this.toolbarService.setShowMainToolbar(false);
    this.toolbarService.setShowSearchToolbar(true);
    this.getProductList();
    
  }

  
getProductList(){
  this.productService.getAllProductList().subscribe((res:any)=>{
     if(res){
      this.productList=res?.payload
       console.log(this.productList);
       for(let p of this.productList){
         let img=p.images
         let k=this.createListFromString(img.toString())
         p.images=k;
       }
       
     }
      
  })
}


createListFromString(imgString:string){
  const arrayOfElements = imgString.split(',');
  return arrayOfElements;
}

  searchClose() {
    if(this.searchText == ''){
      this.router.navigate(['/']);
    }
    this.searchText = '';
    
  }
  navigateToProduct(id:any){
    this.router.navigate(["/product-details",id])
    this.toolbarService.setShowMainToolbar(true);
    this.toolbarService.setShowSearchToolbar(false);
  }
}
