import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneTrainingFormComponent } from './drone-training-form.component';

describe('DroneTrainingFormComponent', () => {
  let component: DroneTrainingFormComponent;
  let fixture: ComponentFixture<DroneTrainingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroneTrainingFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroneTrainingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
