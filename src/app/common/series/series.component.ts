import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { log } from 'console';
import { Product } from 'src/app/shared/model/product';
import { ProductService } from 'src/app/shared/services/product-service/product.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  djiMiniSeries:any;
  djiMavicSeries:any;
  djiAvataSeries:any;
  djiAirSeries:any;
  productListOnSeries:any;
  productList:any;
  isDjiMiniSeries=false;
  isDjiMavicSeries=false;
  isDjiAvataSeries=false;
  isDjiAirSeries=false;
  id:any;
  constructor(private productService:ProductService,private route: ActivatedRoute){}
  ngOnInit(): void { 
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
         this.djiMiniSeries=this.productList.filter((val:any)=>val.series==='dji-mini-series');
         this.djiMavicSeries=this.productList.filter((val:any)=>val.series==='dji-mavic-series');
         this.djiAvataSeries=this.productList.filter((val:any)=>val.series==='dji-avata-series');
         this.djiAirSeries=this.productList.filter((val:any)=>val.series==='dji-air-series');
         this.route.params.subscribe(params => {
          this.id = params['id'];
         console.log('ID:', this.id);
         // Use the id as needed
       });
       if(this.id=='dji-mini-series'){
        this.productListOnSeries=this.djiMiniSeries;
        this.isDjiMiniSeries=true;
        this.isDjiMavicSeries=false;
        this.isDjiAvataSeries=false;
        this.isDjiAirSeries=false;
       }else if(this.id=='dji-mavic-series'){
        this.productListOnSeries=this.djiMavicSeries;
        this.isDjiMiniSeries=false;
        this.isDjiMavicSeries=true;
        this.isDjiAvataSeries=false;
        this.isDjiAirSeries=false;
       }else if(this.id=='dji-avata-series'){
        this.productListOnSeries=this.djiAvataSeries;
        this.isDjiMiniSeries=false;
        this.isDjiMavicSeries=false;
        this.isDjiAvataSeries=true;
        this.isDjiAirSeries=false;
       }else if(this.id=='dji-air-series'){
        this.productListOnSeries=this.djiAirSeries;
        this.productListOnSeries=this.djiAvataSeries;
        this.isDjiMiniSeries=false;
        this.isDjiMavicSeries=false;
        this.isDjiAvataSeries=false;
        this.isDjiAirSeries=true;
       }
       }
        
    })
  }
  
  createListFromString(imgString:string){
    const arrayOfElements = imgString.split(',');
    return arrayOfElements;
  }
}
