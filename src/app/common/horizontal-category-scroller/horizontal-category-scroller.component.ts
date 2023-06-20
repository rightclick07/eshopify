import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-category-scroller',
  templateUrl: './horizontal-category-scroller.component.html',
  styleUrls: ['./horizontal-category-scroller.component.css']
})
export class HorizontalCategoryScrollerComponent implements OnInit {

  images=[
    {
    title:"Drone",
    url:"assets/img/utility/drone.png",
    subCategory:[
      {
        id:1,
        title:"Nano Drone",
        icon:"",
        products:[]
      },
      {
        id:2,
        title:"Micro Drone",
        icon:"",
        products:[]
      },
      {
        id:3,
        title:"Enterprise Drone",
        icon:"",
        products:[]
      },
      {
        id:4,
        title:"Toy Drone",
        icon:"",
        products:[]
      }
    ]
    },
    {
    title:"Camera",
    url:"assets/img/utility/camera.png",
    subCategory:[
      {
        id:1,
        title:"Action Camera",
        icon:"",
        products:[]
      },
      {
        id:2,
        title:"DSLR",
        icon:"",
        products:[]
      },
      {
        id:3,
        title:"Gimbles",
        icon:"",
        products:[]
      },
    ]
    },
    {
    title:"Gaming",
    url:"assets/img/utility/gaming.png",
    subCategory:[
      {
        id:1,
        title:"XBOX",
        icon:"",
        products:[]
      },
      {
        id:2,
        title:"VR Headsets",
        icon:"",
        products:[]
      },
      {
        id:3,
        title:"Play Stations",
        icon:"",
        products:[]
      },
    ]
    },
    {
    title:"Services",
    url:"assets/img/utility/drone-service.png",
    subCategory:[
      {
        id:1,
        title:"Rent a Drone",
        icon:"",
        products:[]
      },
      {
        id:2,
        title:"Drone Repair",
        icon:"",
        products:[]
      },
      {
        id:3,
        title:"Drone Training",
        icon:"",
        products:[]
      },
      {
        id:4,
        title:"Get Your UIN",
        icon:"",
        products:[]
      },
      {
        id:4,
        title:"Drone Piolet License",
        icon:"",
        products:[]
      }
    ]
    },
    {
    title:"Mobile",
    url:"assets/img/utility/mobile.png"
    },
    {
    title:"Electronics",
    url:"assets/img/utility/electronics.png"
    }
  ]

  droneSubCategory:any
  cameraSubCategory:any;
  gamingSubCategory:any;
  droneServiceSubCategory:any;
  
  constructor() { }

  ngOnInit(): void {
    this.getSubCategories();
    console.log(this.droneSubCategory)
  }
  getSubCategories(){
    this.images.forEach(element => {
      console.log("element+",element.subCategory);
      
      if(element.title=="Drone"){
        this.droneSubCategory=element.subCategory;
        this.cameraSubCategory=[]
        this.gamingSubCategory=[]
        this.droneServiceSubCategory=[]
      }else if(element.title=="Camera"){
        this.cameraSubCategory!=element.subCategory;
        this.droneSubCategory=[]
        this.gamingSubCategory=[]
        this.droneServiceSubCategory=[]
      }else if(element.title=="Gaming"){
        this.gamingSubCategory=element.subCategory;
        this.cameraSubCategory=[]
        this.droneSubCategory=[]
        this.droneServiceSubCategory=[]
      }else if(element.title=="Services"){
        this.droneServiceSubCategory=element.subCategory;
        this.gamingSubCategory=[]
        this.cameraSubCategory=[]
        this.droneSubCategory=[]
      }
      
    });
  }

}
