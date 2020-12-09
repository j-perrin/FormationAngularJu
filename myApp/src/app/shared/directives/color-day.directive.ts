import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appColorDay]'
})
export class ColorDayDirective implements OnChanges{

  @Input() appColorDay: number;
  @HostBinding('class') className: String;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.appColorDay > 1){
      this.className = 'plural';
    } else {
      this.className = 'singular'
    }
  }

}
