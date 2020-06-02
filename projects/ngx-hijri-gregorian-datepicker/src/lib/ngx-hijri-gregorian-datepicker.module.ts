import { NgModule } from '@angular/core';
import { NgxHijriGregorianDatepickerComponent } from './ngx-hijri-gregorian-datepicker.component';
import { HijriGregorianDatepickerComponent } from './hijri-gregorian-datepicker/hijri-gregorian-datepicker.component';
import { HijriDatepickerComponent } from './hijri-gregorian-datepicker/hijri-datepicker/hijri-datepicker.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { DateFormatterService } from './hijri-gregorian-datepicker/date-formatter.service';
import { CustomNgbDateParserFormatter } from './hijri-gregorian-datepicker/CustomNgbDateParserFormatter';

@NgModule({
  declarations: [
    NgxHijriGregorianDatepickerComponent,
    HijriGregorianDatepickerComponent,
    HijriDatepickerComponent
  ],
  imports: [
    CommonModule ,
    FormsModule,
    NgbModule
  ],
  providers: [
    DateFormatterService
    ,
    {
      provide: NgbDateParserFormatter, useFactory() {
        return new CustomNgbDateParserFormatter('d/M/yyyy');
      }
    }
  ],
  exports: [ HijriGregorianDatepickerComponent, NgxHijriGregorianDatepickerComponent]
})
export class NgxHijriGregorianDatepickerModule { }
