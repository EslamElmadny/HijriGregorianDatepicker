import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijriGregorianDatepickerComponent } from './hijri-gregorian-datepicker/hijri-gregorian-datepicker.component';
import { HijriDatepickerComponent } from './hijri-gregorian-datepicker/hijri-datepicker/hijri-datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    HijriGregorianDatepickerComponent,
    HijriDatepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
