import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click')
  prevFunc(){
    console.log(this.el.nativeElement)
    let elm = this.el.nativeElement.parentElement.parentElement.children[0];
    console.log(elm)
    let item= elm.getElementsByClassName("item");
    console.log(item)
  elm.prepend(item[item.length - 1]);
  }
}
