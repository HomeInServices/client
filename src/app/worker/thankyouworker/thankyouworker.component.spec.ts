import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouworkerComponent } from './thankyouworker.component';

describe('ThankyouworkerComponent', () => {
  let component: ThankyouworkerComponent;
  let fixture: ComponentFixture<ThankyouworkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankyouworkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankyouworkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
