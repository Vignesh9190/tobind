import { Directive,ElementRef, HostListener  } from '@angular/core';

@Directive({
  selector: '[appOnlyStringValidation]'
})
export class OnlyStringValidationDirective {

  private regex: RegExp = new RegExp(/^[A-Za-z]+$/);
  private specialKeys: Array<string> = [ 'Backspace', 'Tab', 'End', 'Home', '-' ];
  constructor(private el: ElementRef) {
  }
 
  @HostListener('keydown', [ '$event' ])
  onKeyDown(event: KeyboardEvent) {
  if (this.specialKeys.indexOf(event.key) !== -1) {
  return;
  }
  let current: string = this.el.nativeElement.value;
  console.log(current);
  let next: string = current.concat(event.key);
  console.log(next);
  if (next && !String(next).match(this.regex)) {
  event.preventDefault();
  }
  }

}
