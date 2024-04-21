import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingProductCardComponent } from './trending-product-card.component';

describe('TrendingProductCardComponent', () => {
  let component: TrendingProductCardComponent;
  let fixture: ComponentFixture<TrendingProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingProductCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
