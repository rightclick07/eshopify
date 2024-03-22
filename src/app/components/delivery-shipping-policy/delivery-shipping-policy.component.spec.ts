import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryShippingPolicyComponent } from './delivery-shipping-policy.component';

describe('DeliveryShippingPolicyComponent', () => {
  let component: DeliveryShippingPolicyComponent;
  let fixture: ComponentFixture<DeliveryShippingPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryShippingPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryShippingPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
