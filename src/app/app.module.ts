import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijriGregorianDatepickerComponent } from './hijri-gregorian-datepicker/hijri-gregorian-datepicker.component';
import { HijriDatepickerComponent } from './hijri-gregorian-datepicker/hijri-datepicker/hijri-datepicker.component';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { CustomNgbDateParserFormatter } from './hijri-gregorian-datepicker/CustomNgbDateParserFormatter';

@NgModule({
  declarations: [
    AppComponent,
    HijriGregorianDatepickerComponent,
    HijriDatepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    {
      provide: NgbDateParserFormatter, useFactory() {
        return new CustomNgbDateParserFormatter('d/M/yyyy');
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
