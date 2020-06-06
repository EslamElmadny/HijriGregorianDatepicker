import { Directive, Optional, SkipSelf } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

export function test(form: NgForm) {
  return form;
}

@Directive({
  selector: '[provideParentForm]',
  providers: [
    {
      provide: ControlContainer,
      useFactory:  test ,
      deps: [[new Optional(), new SkipSelf(), NgForm]]
    }
]
})
export class ProvideParentFormDirective {

  constructor() { }

}
