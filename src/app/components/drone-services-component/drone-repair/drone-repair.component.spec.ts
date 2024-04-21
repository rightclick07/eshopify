import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneRepairComponent } from './drone-repair.component';

describe('DroneRepairComponent', () => {
  let component: DroneRepairComponent;
  let fixture: ComponentFixture<DroneRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroneRepairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroneRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
