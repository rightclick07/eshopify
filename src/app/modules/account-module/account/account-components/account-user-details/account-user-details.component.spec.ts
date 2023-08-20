import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountUserDetailsComponent } from './account-user-details.component';

describe('AccountUserDetailsComponent', () => {
  let component: AccountUserDetailsComponent;
  let fixture: ComponentFixture<AccountUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountUserDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
