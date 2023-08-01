import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  trendingBlogs=[
    {
      id:1,
      title:"Agriculture Drones – an Introduction ",
      img:"assets/img/utility/gaming.png",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      routePath:"blockchain"
    },
    {
      id:2,
      title:"Artificial Intelligence",
      img:"assets/img/utility/gaming.png",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"ai"
    },
    {
      id:3,
      title:"Machine Learning",
      img:"assets/img/utility/gaming.png",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"ml"
    },
    {
      id:4,
      title:"Data Science",
      img:"assets/img/utility/gaming.png",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"data-science"
    },
    {
      id:5,
      title:"AWS",
      img:"assets/img/utility/gaming.png",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"aws"
    },
    {
      id:6,
      title:"Kubernetes ",
      img:"assets/img/utility/gaming.png",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"kubernetes"
    },
    {
      id:7,
      title:"Cyber Security",
      img:"assets/img/utility/gaming.png",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"cyber-security"
    },
    
    {
      id:8,
      title:"SEO",
      img:"assets/img/utility/gaming.png",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"seo"
    },
    
  ]
  OpenTrendingBlog(id:any){}
}
