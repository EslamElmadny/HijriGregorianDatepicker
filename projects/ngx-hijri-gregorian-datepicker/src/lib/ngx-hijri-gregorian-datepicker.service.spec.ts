import { TestBed } from '@angular/core/testing';

import { NgxHijriGregorianDatepickerService } from './ngx-hijri-gregorian-datepicker.service';

describe('NgxHijriGregorianDatepickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxHijriGregorianDatepickerService = TestBed.get(NgxHijriGregorianDatepickerService);
    expect(service).toBeTruthy();
  });
});
