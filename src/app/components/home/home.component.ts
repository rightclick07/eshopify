import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { log } from 'console';
import { Observable, map, shareReplay } from 'rxjs';
import { ResponseData } from 'src/app/shared/model/ResponseData';
import { Product } from 'src/app/shared/model/product';
import { ProductService } from 'src/app/shared/services/product-service/product.service';
import { ToolbarService } from 'src/app/shared/services/toolbar/toolbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {
  imageList=["assets/img/banners/1.jpg","assets/img/banners/2.jpg","assets/img/banners/3.jpg"]
  imageListMobileView=["https://everse-assets.s3.amazonaws.com/moble-view-slider-templates/mobile+template.jpg",
  "https://everse-assets.s3.amazonaws.com/moble-view-slider-templates/mobile+template-1.png",
  "https://everse-assets.s3.amazonaws.com/moble-view-slider-templates/mobile+template-3.png",
  "https://everse-assets.s3.amazonaws.com/moble-view-slider-templates/mobile+template-4.png"
]
djiSeriesimageList = [
  { src: 'https://everse-assets.s3.amazonaws.com/dji-series/DJI+MINI+SERIES.png',
   alt: 'mini-series', 
   link: 'dji-mini-series' },
  { src: 'https://everse-assets.s3.amazonaws.com/dji-series/DJI+MAVIC+SERIES.png',
   alt: 'mavic-series',
    link: 'dji-mavic-series' },
  { src: 'https://everse-assets.s3.amazonaws.com/dji-series/DJI+AIR+SERIES.png',
   alt: 'air-series',
    link: 'dji-air-series' },
  { src: 'https://everse-assets.s3.amazonaws.com/dji-series/DJI+AVATA+SERIES.png',
   alt: 'avata-series',
    link: 'dji-avata-series' },
  // Add more images as needed
];
  height=0;
  category=[
    {
    title:"Drone",
    url:"assets/img/utility/drone.png"
    },
    {
      title:"Services",
      url:"assets/img/utility/drone.png"
    },
    {
      title:"Camera",
      url:"assets/img/utility/drone.png"
    },
    {
      title:"Gaming",
      url:"assets/img/utility/drone.png"
    }

  ]

  sliderConfig = {
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoints as needed
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  selectedImage!: string;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  productList:Product[]=[]
  
  constructor(private breakpointObserver: BreakpointObserver,private productService:ProductService,public toolbarService:ToolbarService) { }
  isHandset: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Tablet)
    .pipe(
      map((result:any) => result.matches),
      shareReplay()
    );
    ngAfterViewInit(): void {
      //this.paginator.pageIndex = 0; // Set initial page index to 0
    }
  ngOnInit(): void {
    this.toolbarService.setShowMainToolbar(true);
    this.toolbarService.setShowSearchToolbar(false);
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

selectImage(image: string): void {
  this.selectedImage = image;
}
}
