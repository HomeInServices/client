import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormworkerComponent } from './formworker.component';

describe('FormworkerComponent', () => {
  let component: FormworkerComponent;
  let fixture: ComponentFixture<FormworkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormworkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormworkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
