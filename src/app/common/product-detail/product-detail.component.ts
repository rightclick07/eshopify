import { Component, OnInit, OnDestroy, ElementRef, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map, shareReplay } from 'rxjs';
import { Product } from 'src/app/shared/model/product';
import { CartService } from 'src/app/shared/services/cart-service/cart.service';
import { ProductService } from 'src/app/shared/services/product-service/product.service';
import { SpinnerService } from 'src/app/shared/services/spinner-service/spinner.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  imageList: string[] = [
    'https://cdn.pixabay.com/photo/2018/01/22/14/13/animal-3099035_1280.jpg',

    'https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_1280.jpg',

    'https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079_1280.jpg',


    "https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg",

    "https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_1280.jpg",

    'https://cdn.pixabay.com/photo/2017/12/10/20/56/feather-3010848_1280.jpg'


  ];

  colors: string[] = ['black', 'blue', 'yellow', 'green', 'orange',];


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );



  selectedImage: string = '';
  @ViewChild('popup', { static: false }) popup!: ElementRef<any>;
  isPopupVisible: boolean = false;
  timeoutId: any;
  private autoSlideInterval: any;
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';
  private interval: any;
  selectedColor: string = this.capitalizeFirstLetterEachWord(this.colors[0]);
  activeColorIndex: number = 0;
  isSmallScreen$: Observable<boolean> | undefined;
  selectedProduct: any;
  cartItemsArray: any[] = [];
  productdetails: any
  activeImageIndex: number = 0;


  constructor(private route: ActivatedRoute,
    private datePipe: DatePipe,
    private productService: ProductService,
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private cartService: CartService,
    private spinnerService: SpinnerService) { }

  setActiveImage(index: number) {
    console.log('Clicked index:', index); // Debugging statement
    this.activeImageIndex = index;
    console.log('Active index:', this.activeImageIndex); // Debugging statement
  }

  ngOnInit() {
    // this.manageAutoSlide('start');
    this.updateTime();
    // this.interval = setInterval(() => {
    //   this.updateTime();
    // }, 1000);

    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log(id);
      this.getProductById(id) // Display the ID in the console or perform further actions with it
      this.selectedImage = this.productdetails?.images[0];
    });

    console.log("this.productdetails", this.productdetails);

    console.log("this.selectedImage" + this.selectedImage);

  }

  ngOnDestroy() {
    // this.manageAutoSlide('stop');
    clearInterval(this.interval);
  }

  manageAutoSlide(action: 'start' | 'stop') {
    if (action === 'start') {
      this.autoSlideInterval = setInterval(() => {
        this.updateSelectedImage('next');
      }, 5000);
    } else if (action === 'stop') {
      clearInterval(this.autoSlideInterval);
    }
  }

  showPopup() {
    clearTimeout(this.timeoutId);
    this.isPopupVisible = true;
  }

  hidePopup() {
    this.timeoutId = setTimeout(() => {
      this.isPopupVisible = false;
    }, 200);
  }

  clearPopupTimeout() {
    clearTimeout(this.timeoutId);
  }


  copyUrlToClipboard(): void {
    const pageUrl = window.location.href;

    // Use the Clipboard API to copy the URL
    navigator.clipboard.writeText(pageUrl).then(() => {
      alert('URL copied to clipboard. You can now paste it in your chat or message box.');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }

  share(platform: string): void {
    const pageUrl = window.location.href;

    // Attempt to use the Web Share API
    if (navigator.share) {
      navigator.share({
        title: document.title,
        text: 'Check this out!',
        url: pageUrl
      }).catch((error) => console.error('Error sharing', error));
    } else {
      this.manualShare(platform, pageUrl);
    }
  }

  private manualShare(platform: string, pageUrl: string): void {
    const encodedUrl = encodeURIComponent(pageUrl);
    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${encodedUrl}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}`;
        break;
      default:
        alert('Unknown platform');
        return;
    }

    window.open(shareUrl, '_blank');
  }




  getImageHeight(): number {
    const containerWidth = document.getElementById('Product__Detail__show__image')?.offsetWidth || 0;
    return containerWidth;
  }

  updateSelectedImage(imageUrl: string | 'prev' | 'next') {
    if (imageUrl === 'prev' || imageUrl === 'next') {
      const currentIndex = this.productdetails.images.indexOf(this.selectedImage);
      let newIndex;
      if (imageUrl === 'prev') {
        newIndex = (currentIndex - 1 + this.productdetails.images.length) % this.productdetails.images.length;
        if (newIndex < 0) {
          newIndex = this.productdetails.images.length - 1;
        }
      } else {
        newIndex = (currentIndex + 1) % this.productdetails.images.length;
        if (newIndex === 0 && currentIndex === this.productdetails.images.length - 1) {
          newIndex = 0;
        }
      }
      this.selectedImage = this.productdetails.images[newIndex];
    } else {
      this.selectedImage = imageUrl;
    }
  }

  calculateDiscountPercentage(compareAtPrice: number, price: number): number {
    if (compareAtPrice && price) {
      const discount = ((price - compareAtPrice) / price) * 100;
      return Math.round(discount);
    } else {
      return 0;
    }
  }

  calculateFivePercentDiscountPrice(compareAtPrice: number): number {
    if (compareAtPrice) {
      return Math.round(compareAtPrice * 0.05);
    } else {
      return 0;
    }
  }

  calculateSevenPercentDiscountPrice(compareAtPrice: number): number {
    if (compareAtPrice) {
      return Math.round(compareAtPrice * 0.07);// Returns the discount amount directly
    } else {
      return 0; // Return 0 if compareAtPrice is not available
    }
  }




  updateTime() {
    const currentDate = new Date();
    const formattedTime = this.datePipe.transform(currentDate, 'HH:mm:ss') ?? '00:00:00';
    const [hours, minutes, seconds] = formattedTime.split(':');
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }



  private capitalizeFirstLetterEachWord(str: string): string {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  }

  isSelected(index: number): boolean {
    return index === this.activeColorIndex;
  }

  setActiveColor(color: string, index: number) {

    this.selectedColor = this.capitalizeFirstLetterEachWord(color);
    this.activeColorIndex = index;
  }

  handleSubmit(form: any) {
    if (form.valid) {
      const pinValue: number = parseInt(form.value.pin);
      if (!isNaN(pinValue)) {
        alert("Your pin is submitted");
        console.log('Entered Pin:', pinValue);
      } else {
        alert("Please submit a valid pin code");
      }
    } else {
      alert("Please submit the correct pin code");
    }
  }



  getProductById(id: number) {
    this.spinnerService.show();
    this.productService.getproductById(id).subscribe((res: any) => {
      if (res) {
        this.spinnerService.hide();
        this.productdetails = res?.payload;
        console.log(this.productdetails);
        let imgString = this.productdetails.images;
        let imageList = this.createListFromString(imgString);
        this.productdetails.images = imageList
        console.log(this.productdetails);
        this.selectedImage = this.productdetails?.images[0];
      }

    })
  }



  addToCart(productDetails: any): void {
    if (localStorage.getItem("token")) {
      // Implement your logic for adding the product to the cart
      console.log('Product added to cart');
      this.cartService.addToCart(productDetails)
    } else {
      this.router.navigate(["/login"])
    }

  }

  createListFromString(imgString: string) {
    const arrayOfElements = imgString.split(',');
    return arrayOfElements;
  }


  convertToPointers(text: string): string {
    const lines = text?.split('\n');
    let convertedText = '';

    lines?.forEach(line => {
      if (line.trim() !== '') {
        convertedText += `<div>${line}</div>`;
      }
    });

    return convertedText;
  }



  checkout(productDetails: any) {
    if (localStorage.getItem("token")) {

      this.cartService.addToCart(productDetails);
      this.router.navigate(["/checkout"])
    } else {
      this.router.navigate(["/login"])
    }
  }

}
