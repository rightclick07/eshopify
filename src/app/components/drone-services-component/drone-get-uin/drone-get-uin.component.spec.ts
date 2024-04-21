import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneGetUinComponent } from './drone-get-uin.component';

describe('DroneGetUinComponent', () => {
  let component: DroneGetUinComponent;
  let fixture: ComponentFixture<DroneGetUinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroneGetUinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroneGetUinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
