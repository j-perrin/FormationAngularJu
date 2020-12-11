import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UserRole } from '../enums/user-role.enum';

@Directive({
  selector: '[appColorRole]'
})
export class ColorRoleDirective implements OnChanges{

  @Input() appColorRole: string;
  @HostBinding('class') className: String;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.className = this.formatClass(this.appColorRole);
  }

  private formatClass(role: string): string{
    if(role === UserRole.ADMIN){
      return `displayAdmin`;
    }
    return `displayUser`
  }

}
