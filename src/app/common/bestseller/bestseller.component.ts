import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Product } from 'src/app/shared/model/product';
import { ProductService } from 'src/app/shared/services/product-service/product.service';

@Component({
  selector: 'app-bestseller',
  templateUrl: './bestseller.component.html',
  styleUrls: ['./bestseller.component.css']
})
export class BestsellerComponent implements OnInit, AfterViewInit {
  constructor(private productService: ProductService){}

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.getProductList();
  }
 
  selectedImage!: string;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  productList: Product[] = []
  getProductList() {
    this.productService.getAllProductList().subscribe((res: any) => {
      if (res) {
        this.productList = res?.payload
        console.log(this.productList);
        for (let p of this.productList) {
          let img = p.images
          let k = this.createListFromString(img.toString()) 
          p.images = k;
        }
      }
    })
  }

  createListFromString(imgString: string) {
    const arrayOfElements = imgString.split(',');
    return arrayOfElements;
  }

  selectImage(image: string): void {
    this.selectedImage = image;
  }
}
