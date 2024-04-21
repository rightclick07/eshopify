import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestsellerProductCardComponent } from './bestseller-product-card.component';

describe('BestsellerProductCardComponent', () => {
  let component: BestsellerProductCardComponent;
  let fixture: ComponentFixture<BestsellerProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestsellerProductCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestsellerProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
