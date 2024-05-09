import { Component } from '@angular/core';

@Component({
  selector: 'app-what-we-provide',
  templateUrl: './what-we-provide.component.html',
  styleUrls: ['./what-we-provide.component.css']
})
export class WhatWeProvideComponent {
  provided_list = [
    { logo: 'assets/we-provide/Service.png', title: 'Guaranteed Peace of Mind', discription: 'Our 1-Year Warranty Promise' },
    { logo: 'assets/we-provide/Refund.png', title: 'Risk-Free Purchase', discription: 'Enjoy Our 1-Week Refund Policy' },
    { logo: 'assets/we-provide/Free-shipping.png', title: 'Shipping Made Simple', discription: 'Enjoy Free Shipping on Every Order' },
    { logo: 'assets/we-provide/Online-support.png', title: '24/7 Assistance', discription: 'Access Online Support Anytime, Anywhere' },
    { logo: 'assets/we-provide/After-sale-service.png', title: 'After-Sale Service', discription: 'Our Commitment Beyond Purchase' },
    { logo: 'assets/we-provide/Drone-Training.png', title: 'Empowering Your Flight', discription: 'Training Included with Every Drone Purchase' },
  ];
}
