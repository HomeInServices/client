import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormclientComponent } from './formclient.component';

describe('FormclientComponent', () => {
  let component: FormclientComponent;
  let fixture: ComponentFixture<FormclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
