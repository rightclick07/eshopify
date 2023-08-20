import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }
  height=0;
  ngOnInit(): void {
  }
  imageList=["assets/img/banners/1.jpg","assets/img/banners/2.jpg","assets/img/banners/3.jpg"]

}
