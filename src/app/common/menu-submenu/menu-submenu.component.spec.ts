import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSubmenuComponent } from './menu-submenu.component';

describe('MenuSubmenuComponent', () => {
  let component: MenuSubmenuComponent;
  let fixture: ComponentFixture<MenuSubmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSubmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
