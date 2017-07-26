import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouclientComponent } from './thankyouclient.component';

describe('ThankyouclientComponent', () => {
  let component: ThankyouclientComponent;
  let fixture: ComponentFixture<ThankyouclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankyouclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankyouclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
