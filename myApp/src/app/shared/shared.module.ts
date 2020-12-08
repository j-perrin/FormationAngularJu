import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TotalPipe } from './pipes/total.pipe';
import { JourPipe } from './pipes/jour.pipe';



@NgModule({
  declarations: [TableLightComponent, TotalPipe, JourPipe],
  imports: [
    CommonModule
  ],
  exports: [
    TableLightComponent,
    TotalPipe,
    JourPipe
  ]
})
export class SharedModule { }
