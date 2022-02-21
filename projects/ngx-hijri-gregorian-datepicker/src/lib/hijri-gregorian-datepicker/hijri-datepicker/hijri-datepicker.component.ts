import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgbCalendar, NgbCalendarIslamicUmalqura, NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { IslamicI18n } from '../IslamicI18n';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'hijri-date-picker',
  templateUrl: './hijri-datepicker.component.html',
  providers: [
    { provide: NgbCalendar, useClass: NgbCalendarIslamicUmalqura },
    { provide: NgbDatepickerI18n, useClass: IslamicI18n }
  ],
  styleUrls: [
    './hijri-date-picker.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class HijriDatepickerComponent {

  @ViewChild('d') datePicker: any;

  @Input() selectedDate: NgbDateStruct;
  @Output() selectedDateChange: EventEmitter<NgbDateStruct> = new EventEmitter();

  @Input() readonly = false;
  @Input() isRequired = false;
  @Input() disabled = false;
  @Input() min: NgbDateStruct;
  @Input() max: NgbDateStruct;
  @Input() name: string;

  @Input() placeHolder: string;

  constructor() { }

  changeDate() {
    this.selectedDateChange.emit(this.selectedDate);
  }

  onBlur() {
    if (!this.selectedDate) {
      this.selectedDateChange.emit(null);
    }
  }

  clear() {
    this.selectedDate = undefined;
    this.datePicker.close();
    this.selectedDateChange.emit(null);
  }

}
