import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click')
  nextFunc() {
    console.log(this.el.nativeElement)
    let elm = this.el.nativeElement.parentElement.parentElement.children[0];
    console.log(elm)
    let item = elm.getElementsByClassName("item");
    console.log(item)
    elm.append(item[0]);
  }
}
