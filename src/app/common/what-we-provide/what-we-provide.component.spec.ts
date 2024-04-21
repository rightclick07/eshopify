import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeProvideComponent } from './what-we-provide.component';

describe('WhatWeProvideComponent', () => {
  let component: WhatWeProvideComponent;
  let fixture: ComponentFixture<WhatWeProvideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatWeProvideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatWeProvideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
