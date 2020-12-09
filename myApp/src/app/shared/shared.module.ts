import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TotalPipe } from './pipes/total.pipe';
import { JourPipe } from './pipes/jour.pipe';
import { ColorStateDirective } from './directives/color-state.directive';
import { ColorDayDirective } from './directives/color-day.directive';



@NgModule({
  declarations: [TableLightComponent, TotalPipe, JourPipe, ColorStateDirective, ColorDayDirective],
  imports: [
    CommonModule
  ],
  exports: [
    TableLightComponent,
    TotalPipe,
    JourPipe,
    ColorStateDirective,
    ColorDayDirective
  ]
})
export class SharedModule { }
