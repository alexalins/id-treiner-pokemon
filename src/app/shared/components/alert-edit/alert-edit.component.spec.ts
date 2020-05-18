import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertEditComponent } from './alert-edit.component';

describe('AlertEditComponent', () => {
  let component: AlertEditComponent;
  let fixture: ComponentFixture<AlertEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
