import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyourecommenderComponent } from './thankyourecommender.component';

describe('ThankyourecommenderComponent', () => {
  let component: ThankyourecommenderComponent;
  let fixture: ComponentFixture<ThankyourecommenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankyourecommenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankyourecommenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
