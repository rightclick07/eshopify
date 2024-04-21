import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneTrainingComponent } from './drone-training.component';

describe('DroneTrainingComponent', () => {
  let component: DroneTrainingComponent;
  let fixture: ComponentFixture<DroneTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroneTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroneTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
