import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DronePioletLicenseComponent } from './drone-piolet-license.component';

describe('DronePioletLicenseComponent', () => {
  let component: DronePioletLicenseComponent;
  let fixture: ComponentFixture<DronePioletLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DronePioletLicenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DronePioletLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
