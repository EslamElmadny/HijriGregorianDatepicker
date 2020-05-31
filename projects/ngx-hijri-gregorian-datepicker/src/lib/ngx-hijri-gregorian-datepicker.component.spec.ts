import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHijriGregorianDatepickerComponent } from './ngx-hijri-gregorian-datepicker.component';

describe('NgxHijriGregorianDatepickerComponent', () => {
  let component: NgxHijriGregorianDatepickerComponent;
  let fixture: ComponentFixture<NgxHijriGregorianDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxHijriGregorianDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxHijriGregorianDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
