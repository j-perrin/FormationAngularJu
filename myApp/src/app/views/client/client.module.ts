import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { PageClientComponent } from './page/page-client/page-client.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IconModule } from 'src/app/icon/icon.module';
import { TemplatesModule } from 'src/app/templates/templates.module';
import { TextsModule } from 'src/app/texts/texts.module';


@NgModule({
  declarations: [PageClientComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    IconModule,
    TemplatesModule
  ]
})
export class ClientModule { }
