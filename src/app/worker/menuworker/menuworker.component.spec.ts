import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuworkerComponent } from './menuworker.component';

describe('MenuworkerComponent', () => {
  let component: MenuworkerComponent;
  let fixture: ComponentFixture<MenuworkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuworkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuworkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
