import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRecepiComponent } from './form-recepi.component';

describe('FormRecepiComponent', () => {
  let component: FormRecepiComponent;
  let fixture: ComponentFixture<FormRecepiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRecepiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRecepiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
