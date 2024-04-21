import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/services/blog-service/blog.service';
import { SpinnerService } from 'src/app/shared/services/spinner-service/spinner.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor(private blogService:BlogService,private spinnerService:SpinnerService) { }
  blogs:any[]=[];
  ngOnInit(): void {
    this.getAllBlogs();
  }
  
  getAllBlogs(){
    this.spinnerService.show();
   this.blogService.getAllBlogList().subscribe(
    res=>{
      if(res)
      this.spinnerService.hide();
        this.blogs=res?.payload;
    }
   )

  }
  OpenTrendingBlog(id:any){}
}
