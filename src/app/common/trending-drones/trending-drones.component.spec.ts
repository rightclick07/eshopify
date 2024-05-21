import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingDronesComponent } from './trending-drones.component';

describe('TrendingDronesComponent', () => {
  let component: TrendingDronesComponent;
  let fixture: ComponentFixture<TrendingDronesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingDronesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingDronesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
