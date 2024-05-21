import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjiDroneComponent } from './dji-drone.component';

describe('DjiDroneComponent', () => {
  let component: DjiDroneComponent;
  let fixture: ComponentFixture<DjiDroneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjiDroneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjiDroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
