import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellsManagementComponent } from './sells-management.component';

describe('SellsManagementComponent', () => {
  let component: SellsManagementComponent;
  let fixture: ComponentFixture<SellsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellsManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
