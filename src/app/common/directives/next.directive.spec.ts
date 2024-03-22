import { NextDirective } from './next.directive';
import { ElementRef } from '@angular/core';
describe('NextDirective', () => {
  it('should create an instance', () => {
    const el = { nativeElement: {} } as ElementRef<any>;
    const directive = new NextDirective(el);
    expect(directive).toBeTruthy();
  });
});
