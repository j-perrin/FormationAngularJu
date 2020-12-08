import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [TableLightComponent, TotalPipe],
  imports: [
    CommonModule
  ],
  exports: [
    TableLightComponent,
    TotalPipe
  ]
})
export class SharedModule { }
