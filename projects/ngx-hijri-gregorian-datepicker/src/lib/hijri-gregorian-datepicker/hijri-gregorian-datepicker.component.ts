import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import {NgbDateStruct, NgbDatepicker} from '@ng-bootstrap/ng-bootstrap';
import { DateType } from './consts';
import { DateFormatterService } from './date-formatter.service';

import * as momentjs from 'moment';
const moment = momentjs;


import * as moment_ from 'moment-hijri';
import { NgForm, ControlContainer } from '@angular/forms';
const momentHijri = moment_;


@Component({
  selector: 'hijri-gregorian-datepicker',
  templateUrl: './hijri-gregorian-datepicker.component.html'
})
export class HijriGregorianDatepickerComponent implements OnInit {

  @ViewChild('d' , { static: false }) datePicker: any;


  @Input() selectedDateType: DateType;
  @Input() selectedDate: NgbDateStruct;
  @Output() selectedDateChange: EventEmitter<NgbDateStruct> = new EventEmitter();

  @Input() label: string;
  @Input() showLabel = true;


  @Input() readonly = false;
  @Input() isRequired = false;
  @Input() disabled = false;

  @Input() minHijri: NgbDateStruct;
  @Input() maxHijri: NgbDateStruct;
  @Input() minGreg: NgbDateStruct;
  @Input() maxGreg: NgbDateStruct;

  @Input() hijriLabel: string;
  @Input() GregLabel: string;

  @Input() placeHolder: string;

  get DateType() {
    return DateType;
  }

  constructor( private dateFormatterService: DateFormatterService) { }

  ngOnInit() {
    if (!this.selectedDateType) {
      this.selectedDateType = DateType.Hijri;
    }
  }

  close() {
    this.datePicker.close();
  }

  clear() {
    this.selectedDate = undefined;
    this.close();
    this.selectedDateChange.emit(null);
  }
  getSelectedDate(): string {

    let formattedDate = this.dateFormatterService.ToString(this.selectedDate);

    if (this.selectedDateType == DateType.Hijri) {
      return momentHijri(formattedDate, 'iD/iM/iYYYY').locale('en').format();
    }

    if (this.selectedDateType == DateType.Gregorian) {
      return moment(formattedDate, 'D/M/YYYY').locale('en').format();
    }
  }

  dateSelected() {
    this.selectedDateChange.emit(this.selectedDate);
  }

  hijriClick() {
    if (this.selectedDateType == DateType.Hijri) {
      return;
    }
    this.selectedDateType = DateType.Hijri;
    //to hijri
    this.selectedDate = this.dateFormatterService.ToHijri(this.selectedDate);
    this.selectedDateChange.emit(this.selectedDate);
  }
  gregClick() {
    if (this.selectedDateType == DateType.Gregorian) {
      return;
    }
    this.selectedDateType = DateType.Gregorian;
    //to Gregorian
    this.selectedDate = this.dateFormatterService.ToGregorian(this.selectedDate);
    this.selectedDateChange.emit(this.selectedDate);
  }
}
