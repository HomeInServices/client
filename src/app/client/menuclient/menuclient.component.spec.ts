import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuclientComponent } from './menuclient.component';

describe('MenuclientComponent', () => {
  let component: MenuclientComponent;
  let fixture: ComponentFixture<MenuclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
