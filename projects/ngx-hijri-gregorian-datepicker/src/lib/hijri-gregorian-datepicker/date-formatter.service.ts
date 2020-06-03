import { Injectable } from '@angular/core';
import { NgbDateStruct, NgbDateParserFormatter, NgbDate } from '@ng-bootstrap/ng-bootstrap';

import * as momentjs from 'moment';
const moment = momentjs;


import * as moment_ from 'moment-hijri';
const momentHijri = moment_;

@Injectable()
export class DateFormatterService {

  constructor(private parserFormatter: NgbDateParserFormatter) { }

    ToString(date: NgbDateStruct): string {
        const dateStr = this.parserFormatter.format(date);
        return dateStr;
    }

    ToHijriDateStruct(hijriDate: string, format: string): NgbDate  {

      const hijriMomentDate =  momentHijri(hijriDate , format); // Parse a Hijri date based on format.

      const day = hijriMomentDate.iDate();
      const month = +hijriMomentDate.iMonth() + 1 ;
      const year = hijriMomentDate.iYear();

      const ngDate =  new NgbDate(+year, month, +day);
      return ngDate;
   }


    ToGregorianDateStruct(gregorianDate: string, format: string): NgbDate {

      const momentDate = moment(gregorianDate, format); // Parse a Gregorian date based on format.

      const day = momentDate.date();
      const month = +momentDate.month() + 1;
      const year = momentDate.year();

      const ngDate = new NgbDate(+year, +month, +day);
      return ngDate;
    }

    ToHijri(date: NgbDateStruct): NgbDateStruct {
        if (!date) {
            return null;
        }
        const dateStr = this.ToString(date);

        const momentDate = momentHijri(dateStr, 'D/M/YYYY');

        const day = momentDate.iDate();
        const month = +momentDate.iMonth() + 1 ;
        const year = momentDate.iYear();

        const ngDate =  new NgbDate(+year, month, +day);
        return ngDate;
    }

    ToGregorian(date: NgbDateStruct) {
        if (!date) {
            return null;
        }

        const dateStr = this.ToString(date);

        const momentDate = momentHijri(dateStr, 'iD/iM/iYYYY');

        const day = momentDate.locale('en').format('D');
        const month = momentDate.locale('en').format('M') ;
        const year = momentDate.locale('en').format('Y');

        const ngDate =  new NgbDate(+year, +month, +day);
        return ngDate;
    }

    GetTodayHijri(): NgbDateStruct {

      const todayHijri = momentHijri().locale('en').format('iYYYY/iM/iD');

      return this.ToHijriDateStruct(todayHijri, 'iYYYY/iM/iD') ;

    }

    GetTodayGregorian(): NgbDateStruct {

      const todayGregorian = moment().locale('en').format('YYYY/M/D');

      return this.ToGregorianDateStruct(todayGregorian, 'YYYY/M/D') ;
    }

}
