import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/shared/services/blog-service/blog.service';
import { SpinnerService } from 'src/app/shared/services/spinner-service/spinner.service';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.css']
})
export class BlogContentComponent implements OnInit {

  content: SafeHtml | undefined;
  blog!: any;
  url:any;
  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private spinnerService: SpinnerService,
    private sanitizer: DomSanitizer,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("id", id);
    this.getProductById(parseInt(id!));
  }

  getProductById(id: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'text/html' // Set the desired content type header
    });
    this.spinnerService.show();
    this.blogService.getproductById(id).subscribe(
      res => {
        if (res) {
          this.spinnerService.hide();
          this.blog = res?.payload;
          console.log("this.blog", this.blog);

          console.log("this.blog?.awsBlogHtmlUrl", this.blog?.awsBlogHtmlUrl);
          this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.blog?.awsBlogHtmlUrl);
 
        }
      }
    );
  }
}
