import { Component, ViewChild } from '@angular/core';
import { NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DateFormatterService , DateType } from 'ngx-hijri-gregorian-datepicker';

import * as momentjs from 'moment';
const moment = momentjs;

import * as moment_ from 'moment-hijri';
const momentHijri = moment_;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hijri-gregorian-datepicker';
  date: NgbDateStruct;
  dateString: string;
  selectedDateType = DateType.Gregorian;

  isDisabled: boolean;
  isReadOnly: boolean;

  @ViewChild('datePicker', { static: false }) startDatePicker: any;


  constructor(private dateFormatterService: DateFormatterService) {

     this.date = this.dateFormatterService.GetTodayGregorian();

  }

  makeReadonly() {
    if (this.isReadOnly) {
      this.isReadOnly = false;
    } else {
      this.isReadOnly = true;
    }
  }

  makeDisabled() {
    if (this.isDisabled) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  getDate() {
    this.dateString = this.startDatePicker.getSelectedDate();
  }

  setCurrentGreg() {
    this.selectedDateType = DateType.Gregorian;
    this.date = this.dateFormatterService.GetTodayGregorian();
  }

  setHijri() {
    this.selectedDateType = DateType.Hijri;
    this.date = this.dateFormatterService.GetTodayHijri();
  }


}
