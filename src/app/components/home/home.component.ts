import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { Observable, map, shareReplay } from 'rxjs';
import { ResponseData } from 'src/app/shared/model/ResponseData';
import { Product } from 'src/app/shared/model/product';
import { ProductService } from 'src/app/shared/services/product-service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedImage!: string;

  productList:Product[]=[]
  imageList=[
    "assets/img/product-sample-images/p0.jpg",
    "assets/img/product-sample-images/p1.jpg",
    "assets/img/product-sample-images/p2.jpg",
    "assets/img/product-sample-images/p3.jpg"
  ]
  constructor(private breakpointObserver: BreakpointObserver,private productService:ProductService) { }
  isHandset: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Tablet)
    .pipe(
      map((result:any) => result.matches),
      shareReplay()
    );

  ngOnInit(): void {
    this.getProductList();
  }

categoryList=[
  {
    id:1,
    name:"Drone",
    icon:"",
    description:"", 
    subCategory:[
      {
        id:1,
        name:"Nano Drone",
        icon:"",
        products:[]
      },
      {
        id:2,
        name:"Micro Drone",
        icon:"",
        products:[]
      },
      {
        id:3,
        name:"Enterprise Drone",
        icon:"",
        products:[]
      },
      {
        id:4,
        name:"Toy Drone",
        icon:"",
        products:[]
      }
    ]
  },
  {
    id:2,
    name:"Camera",
    icon:"",
    description:"",
    subCategory:[
      {
        id:1,
        name:"Action Camera",
        icon:"",
        products:[]
      },
      {
        id:2,
        name:"DSLR",
        icon:"",
        products:[]
      },
      {
        id:3,
        name:"Gimbles",
        icon:"",
        products:[]
      }
    ]
  },
  {
    id:3,
    name:"Gaming",
    icon:"",
    description:"",
    subCategory:[
      {
        id:1,
        name:"VR Headsets",
        icon:"",
        products:[]
      },
      {
        id:2,
        name:"XBOX",
        icon:"",
        products:[]
      },
      {
        id:3,
        name:"Play Stations",
        icon:"",
        products:[]
      },
    ]
  },
  {
    id:4,
    name:"Drone Service",
    icon:"",
    description:"",
    subCategory:[
      {
        id:1,
        name:"Rent a Drone",
        icon:"",
        products:[]
      },
      {
        id:2,
        name:"Repair Drone",
        icon:"",
        products:[]
      },
      {
        id:3,
        name:"Drone Training",
        icon:"",
        products:[]
      },
      {
        id:4,
        name:"Gey Your UIN",
        icon:"",
        products:[]
      },
      {
        id:5,
        name:"Drone Piolet License",
        icon:"",
        products:[]
      }
    ]
  }
  
]

getProductList(){
  this.productService.getAllProductList().subscribe((res:any)=>{
     if(res){
      this.productList=res?.payload
       console.log(this.productList);
       for(let p of this.productList){
         let img=p.images
         console.log(img);
         let k=this.createListFromString(img.toString())
         console.log(k);
         p.images=k;
       }
       
     }
      
  })
}

createListFromString(imgString:string){
  const arrayOfElements = imgString.split(',');
  return arrayOfElements;
}

selectImage(image: string): void {
  this.selectedImage = image;
}
}
