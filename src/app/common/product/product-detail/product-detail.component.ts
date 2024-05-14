import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  images: string[] = [
    'https://cdn.pixabay.com/photo/2018/01/22/14/13/animal-3099035_1280.jpg',

    'https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_1280.jpg',

    'https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079_1280.jpg',


    "https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg",

    "https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_1280.jpg",
    'https://cdn.pixabay.com/photo/2018/01/22/14/13/animal-3099035_1280.jpg',

    'https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_1280.jpg',

    'https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079_1280.jpg',


    "https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg",

    "https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_1280.jpg",

    'https://cdn.pixabay.com/photo/2017/12/10/20/56/feather-3010848_1280.jpg'


  ];
  colors: string[] = ['black', 'blue', 'yellow', 'green', 'orange',];





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


  constructor(private datePipe: DatePipe) { }



  ngOnInit() {
    this.manageAutoSlide('start');
    this.updateTime();
    this.interval = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  ngOnDestroy() {
    this.manageAutoSlide('stop');
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
  getImageHeight(): number {
    const containerWidth = document.getElementById('Product__Detail__show__image')?.offsetWidth || 0;
    return containerWidth;
  }

  updateSelectedImage(imageUrl: string | 'prev' | 'next') {
    if (imageUrl === 'prev') {
      const currentIndex = this.images.indexOf(this.selectedImage);
      let newIndex = (currentIndex - 1 + this.images.length) % this.images.length;
      if (newIndex < 0) {
        newIndex = this.images.length - 1;
      }
      this.selectedImage = this.images[newIndex];
    } else if (imageUrl === 'next') {
      const currentIndex = this.images.indexOf(this.selectedImage);
      let newIndex = (currentIndex + 1) % this.images.length;
      if (newIndex === 0 && currentIndex === this.images.length - 1) {
        this.selectedImage = this.images[0];
      } else {
        this.selectedImage = this.images[newIndex];
      }
    } else {
      this.selectedImage = imageUrl;
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

}
