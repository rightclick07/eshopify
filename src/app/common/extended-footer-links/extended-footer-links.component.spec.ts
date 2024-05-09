import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedFooterLinksComponent } from './extended-footer-links.component';

describe('ExtendedFooterLinksComponent', () => {
  let component: ExtendedFooterLinksComponent;
  let fixture: ComponentFixture<ExtendedFooterLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendedFooterLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendedFooterLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
