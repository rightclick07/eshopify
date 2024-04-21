import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneRentComponent } from './drone-rent.component';

describe('DroneRentComponent', () => {
  let component: DroneRentComponent;
  let fixture: ComponentFixture<DroneRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroneRentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroneRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
