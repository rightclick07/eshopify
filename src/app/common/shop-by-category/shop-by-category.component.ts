import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-by-category',
  templateUrl: './shop-by-category.component.html',
  styleUrls: ['./shop-by-category.component.css']
})
export class ShopByCategoryComponent {
   constructor(private router:Router){}

  drones_list = [
    {
      name: 'Consumer Drone',
      images: "https://everse-assets.s3.amazonaws.com/shop-by-categoty/consumer-drone.png",
      imageBanner:"https://everse-assets.s3.amazonaws.com/shop-by-categoty/agricultural-drone-banner.png",
      routeUrl: 'consumer-drone'
    },
    {
      name: 'Enterprise Drone',
      images: "https://everse-assets.s3.amazonaws.com/shop-by-categoty/enterprise-drone.png",
      imageBanner:"https://everse-assets.s3.amazonaws.com/shop-by-categoty/enterprise-drone-banner.png",
      routeUrl: 'enterprise-drone'
    },
    {
      name: 'Agricultural Drone',
      images: "https://everse-assets.s3.amazonaws.com/shop-by-categoty/agriculture-drone.png",
      imageBanner:"https://everse-assets.s3.amazonaws.com/shop-by-categoty/agricultural-drone-banner.png",
      routeUrl: 'agricultural-drone'
    },
    {
      name: 'Thermal Drone',
      images: "https://everse-assets.s3.amazonaws.com/shop-by-categoty/thermal-drone.png",
      imageBanner:"https://everse-assets.s3.amazonaws.com/shop-by-categoty/thermal-drone-banner.png",
      routeUrl: 'thermal-drone'
    },
    {
      name: 'Toy Drone',
      images: "https://everse-assets.s3.amazonaws.com/shop-by-categoty/toy-drone.png",
      imageBanner:"https://everse-assets.s3.amazonaws.com/shop-by-categoty/toy-drone-banner.png",
      routeUrl: 'toy-drone'
    },
    {
      name: 'Adventure Drone',
      images: "https://everse-assets.s3.amazonaws.com/shop-by-categoty/adventure-drone.png",
      imageBanner:"https://everse-assets.s3.amazonaws.com/shop-by-categoty/agricultural-drone-banner.png",
      routeUrl: 'adventure-drone'
    }, 
  ]

  navigateToProductDetails(id:any){
    console.log("id",id);
    
    this.router.navigate(["/filter-product",id])
  }
}
