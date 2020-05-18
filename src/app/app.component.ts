import { Component, ViewChild } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { HijriGregorianDatepickerComponent } from './hijri-gregorian-datepicker/hijri-gregorian-datepicker.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'hijri-gregorian-datepicker';
  date: NgbDate;

  @ViewChild('datePicker', {static : true}) startDatePicker: HijriGregorianDatepickerComponent;





}
