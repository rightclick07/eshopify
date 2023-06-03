import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalCategoryScrollerComponent } from './horizontal-category-scroller.component';

describe('HorizontalCategoryScrollerComponent', () => {
  let component: HorizontalCategoryScrollerComponent;
  let fixture: ComponentFixture<HorizontalCategoryScrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalCategoryScrollerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalCategoryScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
