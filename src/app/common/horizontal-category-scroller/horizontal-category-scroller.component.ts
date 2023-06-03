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
    url:"assets/img/utility/drone.png"
    },
    {
    title:"Camera",
    url:"assets/img/utility/camera.png"
    },
    {
    title:"Gaming",
    url:"assets/img/utility/gaming.png"
    },
    {
    title:"Services",
    url:"assets/img/utility/drone-service.png"
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
  constructor() { }

  ngOnInit(): void {
  }

}
