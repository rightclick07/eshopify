import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNumberLoginComponent } from './mobile-number-login.component';

describe('MobileNumberLoginComponent', () => {
  let component: MobileNumberLoginComponent;
  let fixture: ComponentFixture<MobileNumberLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileNumberLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileNumberLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
