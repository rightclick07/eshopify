import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressOptionComponent } from './address-option.component';

describe('AddressOptionComponent', () => {
  let component: AddressOptionComponent;
  let fixture: ComponentFixture<AddressOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
