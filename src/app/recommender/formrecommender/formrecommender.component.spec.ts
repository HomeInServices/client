import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormrecommenderComponent } from './formrecommender.component';

describe('FormrecommenderComponent', () => {
  let component: FormrecommenderComponent;
  let fixture: ComponentFixture<FormrecommenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormrecommenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormrecommenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
