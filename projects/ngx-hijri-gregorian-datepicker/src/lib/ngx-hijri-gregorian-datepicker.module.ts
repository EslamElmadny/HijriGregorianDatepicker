import { NgModule } from '@angular/core';
import { NgxHijriGregorianDatepickerComponent } from './ngx-hijri-gregorian-datepicker.component';
import { HijriGregorianDatepickerComponent } from './hijri-gregorian-datepicker/hijri-gregorian-datepicker.component';
import { HijriDatepickerComponent } from './hijri-gregorian-datepicker/hijri-datepicker/hijri-datepicker.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { DateFormatterService } from './hijri-gregorian-datepicker/date-formatter.service';
import { CustomNgbDateParserFormatter } from './hijri-gregorian-datepicker/CustomNgbDateParserFormatter';
import { ProvideParentFormDirective } from './hijri-gregorian-datepicker/provide-parent-form.directive';

@NgModule({
  declarations: [
    NgxHijriGregorianDatepickerComponent,
    HijriGregorianDatepickerComponent,
    HijriDatepickerComponent,
    ProvideParentFormDirective
  ],
  imports: [
    CommonModule ,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    {provide: NgbDateParserFormatter, useClass: CustomNgbDateParserFormatter},
    DateFormatterService
  ],
  exports: [ HijriGregorianDatepickerComponent, NgxHijriGregorianDatepickerComponent]
})
export class NgxHijriGregorianDatepickerModule { }
