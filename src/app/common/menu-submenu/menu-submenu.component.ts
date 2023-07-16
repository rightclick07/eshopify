import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-submenu',
  templateUrl: './menu-submenu.component.html',
  styleUrls: ['./menu-submenu.component.css']
})
export class MenuSubmenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuList=[
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
  

  menuItemClicked(item: any) {
    console.log('Menu item clicked:', item);
  }
  
  subMenuItemClicked(subItem: any) {
    console.log('Submenu item clicked:', subItem);
  }
}
