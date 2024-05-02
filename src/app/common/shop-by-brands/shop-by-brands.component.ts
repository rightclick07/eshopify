import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-by-brands',
  templateUrl: './shop-by-brands.component.html',
  styleUrls: ['./shop-by-brands.component.css']
})
export class ShopByBrandsComponent {
  brands_list = [
    { imgUrl: 'assets/img/brands/DJI.png', brandName: 'Guaranteed Peace of Mind', alt: 'xreal-logo' },
    { imgUrl: 'assets/img/brands/GOPRO.png', brandName: 'Risk-Free Purchase', alt: 'xreal-logo' },
    { imgUrl: 'assets/img/brands/auteltech.png', brandName: 'Shipping Made Simple', alt: 'xreal-logo' },
    { imgUrl: 'assets/img/brands/Insta360.png', brandName: '24/7 Assistance', alt: 'xreal-logo' },
    { imgUrl: 'assets/img/brands/Skydio.png', brandName: 'After-Sale Service', alt: 'xreal-logo' },
    { imgUrl: 'assets/img/brands/xreal.png', brandName: 'Empowering Your Flight', alt: 'xreal-logo' },
    { imgUrl: 'assets/img/brands/ibni.png', brandName: 'Shipping Made Simple', alt: 'xreal-logo' },
  ];
}
