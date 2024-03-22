import { PrevDirective } from './prev.directive';
import { ElementRef } from '@angular/core';
describe('PrevDirective', () => {
  it('should create an instance', () => {
    const el = { nativeElement: {} } as ElementRef<any>;
    const directive = new PrevDirective(el);
    expect(directive).toBeTruthy();
  });
});
