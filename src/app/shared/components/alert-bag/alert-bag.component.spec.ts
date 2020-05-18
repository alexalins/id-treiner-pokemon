import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertBagComponent } from './alert-bag.component';

describe('AlertBagComponent', () => {
  let component: AlertBagComponent;
  let fixture: ComponentFixture<AlertBagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertBagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
