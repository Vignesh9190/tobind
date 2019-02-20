import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS} from "@angular/forms";
@Directive({
  selector: '[appDobvalidation]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: DobvalidationDirective,
    multi: true
  }]
})
export class DobvalidationDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): { [key: string]: boolean } | null {

    if (control.value !== undefined && (isNaN(control.value))) {
      console.log('present')
      let year = new Date(control.value).getFullYear();
      console.log(year);
      let today = new Date().getFullYear();
      let diff = today - year;
      if (diff <= 18) {
        console.log('reached');
        return { 'dobError': true };
      }
    }
    return null;
  }

}
