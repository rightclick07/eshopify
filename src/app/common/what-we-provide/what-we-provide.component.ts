import { Component } from '@angular/core';

@Component({
  selector: 'app-what-we-provide',
  templateUrl: './what-we-provide.component.html',
  styleUrls: ['./what-we-provide.component.css']
})
export class WhatWeProvideComponent {
  replacement_list = [
    { logo: 'https://everse-assets.s3.amazonaws.com/what-we-provide/warranty.png', title: '1 year ', word: 'Warranty' },
    { logo: 'https://everse-assets.s3.amazonaws.com/what-we-provide/replacement.png', title: '7-day', word: 'Replacement' },
    { logo: 'https://everse-assets.s3.amazonaws.com/what-we-provide/delivery.png', title: 'Free', word: 'Shipping' },
    { logo: 'https://everse-assets.s3.amazonaws.com/what-we-provide/billing.png', title: 'GST ', word: 'Billing' }
  ];
}
