import { Component, ViewChild } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { DateFormatterService } from 'projects/ngx-hijri-gregorian-datepicker/src/public-api';

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
  date: NgbDate;
  dateString: string;

  @ViewChild('datePicker') startDatePicker: any;

  constructor(private dateFormatterService: DateFormatterService) {

    let todayHijri = momentHijri().locale('en').format('iYYYY/iM/iD');

    this.date = this.dateFormatterService.ToBindableHijroDateUsingFormat(todayHijri, 'iYYYY/iM/iD') ;

  }

  getDate(){
      this.dateString = this.startDatePicker.getSelectedDate();
  }

}
