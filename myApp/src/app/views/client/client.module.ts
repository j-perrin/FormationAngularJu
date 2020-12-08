import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { PageClientComponent } from './page/page-client/page-client.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [PageClientComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ]
})
export class ClientModule { }
