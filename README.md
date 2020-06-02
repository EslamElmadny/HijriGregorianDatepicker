
# Hijri Gregorian Datepicker

* This an angular date picker based on [ng-bootstrap](https://ng-bootstrap.github.io/#/components/datepicker/overview) that supports **Gregorian** and **Hijri** calendars. 
* Provides ability to swap between **Gregorian** and **Hijri** calendars 
* Converting selected date back and forth when changing calendar type.
* Provides service `DateFormatterService` to help converting date formats in both calendars types.
* It is developed using  `Angular >=7.0.0`  and its newly introduced  `ng g library`  schematics.
* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Examples/Demo
A simple Example can be found under `src/app/app.component` directory of this repository. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Features
* Simple UI to switch between  **Gregorian** and **Hijri** calendars.
* Ability to specify the default calendar type either **Gregorian** or **Hijri**.
* Converting dates when changing type of calendar.
* Ability to specify min and max value for **Gregorian** and **Hijri**.
* Ability to make it required or readonly.



## Installation
>npm i ngx-hijri-gregorian-datepicker


## API
>import  {  NgxHijriGregorianDatepickerModule  }  from  'ngx-hijri-gregorian-datepicker';

 ### @Inputs()
 
| Input|  Type| Required| Description |
|--|--|--| -- |
|selectedDateType|DateType|No| Default calendar type , will be **hijri**  if not sepcified. |
|selectedDate|NgbDateStruct|No| Date to bind (two way binding). |
|label|string|Yes| Label will be shown besides the input. |
|readonly|bool|No| Specify if user can write in input manually without selecting from datepicker. |
|isRequired|bool|No| Specify required or not field. |
|disabled|bool|No| Specify disabled or not. |
|minHijri|NgbDateStruct|No| Minimum allowed **hijri** date to select. |
|maxHijri|NgbDateStruct|No| Maximum allowed **hijri** date to select. |
|minGreg|NgbDateStruct|No| Minimum allowed **Gregorian** date to select. |
|maxGreg|NgbDateStruct|No| Maximum allowed **Gregorian** date to select. |
|hijriLabel|string|No| Label for Hijri button , will be 'Hijri' By Default. |
|GregLabel|string|No| Label for Gregorian button , will be 'Gregorian' By Default. |


### @Outputs()

| Output|  Type| Required| Description |
|--|--|--| -- |
|selectedDateChange|EventEmitter of NgbDateStruct |--| Emitted after selecting date from picker. |

## Dependencies

Make sure that `@ng-bootstrap/ng-bootstrap` and  `bootstrap` with appropriate versions to angular 7.

## Usage


1.  Install the package  `npm i ngx-hijri-gregorian-datepicker` .
2.  Import the  `NgxHijriGregorianDatepickerModule`  in your app module 
	 `import  {  NgxHijriGregorianDatepickerModule  }  from  'ngx-hijri-gregorian-datepicker';`
3. In template 
 ```
 <hijri-gregorian-datepicker
			[label]="'Birth Date'"
			[(selectedDate)]="selectedDate"
			[isRequired]="true"
			[GregLabel]="'Gregorian'"
			[hijriLabel]  ="'Hijri'"
			[selectedDateType]="selectedDateType"
			#datePicker>
</hijri-gregorian-datepicker>`
```
4. In typescript file
```
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { DateType } from 'ngx-hijri-gregorian-datepicker';  

@Component({...})

export  class  AppComponent  {

date:  NgbDate;
selectedDateType  =  DateType.Hijri;  // or DateType.Gregorian

constructor()  {}

}
```

## Utilities

>DateFormatterService

| Method|  Parameter | Return| Description |
|--|--|--| -- |
|ToBindableHijroDate(hijriDate)|hijriDate:string|NgbDate| Recive hijri date came from server as a string and convert to `NgbDate` to be binded to the component. Defualt format `(iD/iM/iYY HH:mm:ss tt)`|
|ToBindableHijroDateUsingFormat(hijriDate,format)|hijriDate:string, format:string|NgbDate| Same as prev method with ability to provide format of receiving date. |
|ToHijri(date)|NgbDateStruct|NgbDateStruct| Convert Gregorian date struct to Hijri struct.  |
|ToGregorian(date)|NgbDateStruct|NgbDateStruct|Convert Hijri date struct to Gregorian struct.|
|ToString(date)|NgbDateStruct|string|Convert date struct to string `dd/mm/yyyy`|






## Credits
This project is based on  [ng-bootstrap](https://ng-bootstrap.github.io/#/components/datepicker/overview) , [moment](https://momentjs.com/) , [moment Hijri](https://github.com/xsoh/moment-hijri) .
