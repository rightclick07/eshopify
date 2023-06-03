import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedImage!: string;

  
  imageList=[
    "assets/img/product-sample-images/p0.jpg",
    "assets/img/product-sample-images/p1.jpg",
    "assets/img/product-sample-images/p2.jpg",
    "assets/img/product-sample-images/p3.jpg"
  ]
  constructor(private breakpointObserver: BreakpointObserver,) { }
  isHandset: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Tablet)
    .pipe(
      map((result:any) => result.matches),
      shareReplay()
    );

  ngOnInit(): void {
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
        id:1,
        name:"Repair Drone",
        icon:"",
        products:[]
      },
      {
        id:1,
        name:"Drone Training",
        icon:"",
        products:[]
      },
      {
        id:1,
        name:"Gey Your UIN",
        icon:"",
        products:[]
      },
      {
        id:1,
        name:"Drone Piolet License",
        icon:"",
        products:[]
      }
    ]
  }
  
]

selectImage(image: string): void {
  this.selectedImage = image;
}
}
