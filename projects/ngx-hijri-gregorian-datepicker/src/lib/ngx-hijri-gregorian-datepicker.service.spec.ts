import { TestBed } from '@angular/core/testing';

import { NgxHijriGregorianDatepickerService } from './ngx-hijri-gregorian-datepicker.service';

describe('NgxHijriGregorianDatepickerService', () => {
  let service: NgxHijriGregorianDatepickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxHijriGregorianDatepickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
