import { Injectable } from '@angular/core';
import { NgbDateStruct, NgbDateParserFormatter, NgbDate } from '@ng-bootstrap/ng-bootstrap';

import * as moment from 'moment';
import * as moment_ from 'moment-hijri';
const momentHijri = moment_;

@Injectable({
  providedIn: 'root'
})
export class DateFormatterService {

  constructor(private parserFormatter: NgbDateParserFormatter) { }

    ToString(date: NgbDateStruct): string {
        let dateStr = this.parserFormatter.format(date);
        return dateStr;
    }

    ToBindableHijroDate(hijriDate: string): NgbDate  {

        let hijriMomentDate =  momentHijri(hijriDate , 'iD/iM/iYY HH:mm:ss tt'); // Parse a Hijri date.

        let day = hijriMomentDate.iDate();
        let month = +hijriMomentDate.iMonth() + 1 ;
        let year = hijriMomentDate.iYear();

        let ngDate =  new NgbDate(+year, month, +day);
        return ngDate;
    }

    ToBindableHijroDateUsingFormat(hijriDate: string, format: string): NgbDate  {

      let hijriMomentDate =  momentHijri(hijriDate , format); // Parse a Hijri date based on format.

      let day = hijriMomentDate.iDate();
      let month = +hijriMomentDate.iMonth() + 1 ;
      let year = hijriMomentDate.iYear();

      let ngDate =  new NgbDate(+year, month, +day);
      return ngDate;
   }

    ToHijri(date: NgbDateStruct): NgbDateStruct {
        if (!date) {
            return null;
        }
        let dateStr = this.ToString(date);

        let momentDate = momentHijri(dateStr, 'D/M/YYYY');

        let day = momentDate.iDate();
        let month = +momentDate.iMonth() + 1 ;
        let year = momentDate.iYear();

        let ngDate =  new NgbDate(+year, month, +day);
        return ngDate;
    }

    ToGregorian(date: NgbDateStruct) {
        if (!date) {
            return null;
        }

        let dateStr = this.ToString(date);

        let momentDate = momentHijri(dateStr, 'iD/iM/iYYYY');

        let day = momentDate.locale('en').format('D');
        let month = momentDate.locale('en').format('M') ;
        let year = momentDate.locale('en').format('Y');

        let ngDate =  new NgbDate(+year, +month, +day);
        return ngDate;
    }

}
