import { Component } from '@angular/core';

@Component({
  selector: 'app-extended-footer-links',
  templateUrl: './extended-footer-links.component.html',
  styleUrls: ['./extended-footer-links.component.css']
})
export class ExtendedFooterLinksComponent {
  isExpanded1: boolean = false;
  isExpanded2: boolean = false;
  isExpanded3: boolean = false;
  isExpanded4: boolean = false;

  toggleAccordion(accordionNumber: number) {
    if (accordionNumber === 1) {
      this.isExpanded1 = !this.isExpanded1;
    } else if (accordionNumber === 2) {
      this.isExpanded2 = !this.isExpanded2;
    } else if (accordionNumber === 3) {
      this.isExpanded3 = !this.isExpanded3;
    } else if (accordionNumber === 4) {
      this.isExpanded4 = !this.isExpanded4;
    }
  }
}
