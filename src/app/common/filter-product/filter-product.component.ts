import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.css']
})
export class FilterProductComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}
filteredProductList:any[]=[]
ngOnInit() {
  this.route.queryParams.subscribe(params => {
    this.filteredProductList = JSON.parse(params['data']); // Parse the JSON string back to an array
    // Now you can use 'data' array in your component
    console.log("this.filteredProductList",this.filteredProductList);
    for(let p of this.filteredProductList){
      let img=p.images
      let k=this.createListFromString(img.toString())
      p.images=k;
    }
  });
}


createListFromString(imgString:string){
  const arrayOfElements = imgString.split(',');
  return arrayOfElements;
}
}
