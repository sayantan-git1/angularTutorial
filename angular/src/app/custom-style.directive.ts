import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private er: ElementRef) {
    er.nativeElement.style.color = "green"
    er.nativeElement.style.backgroundColor = "yellow"
  }

}
