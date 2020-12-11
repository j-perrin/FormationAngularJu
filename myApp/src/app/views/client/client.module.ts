import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { PageClientComponent } from './page/page-client/page-client.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IconModule } from 'src/app/icon/icon.module';
import { TemplatesModule } from 'src/app/templates/templates.module';
import { TextsModule } from 'src/app/texts/texts.module';
import { PageAddClientComponent } from './page/page-add-client/page-add-client.component';
import { FormAddClientComponent } from './component/form-add-client/form-add-client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageViewComponent } from './page/page-view/page-view.component';


@NgModule({
  declarations: [PageClientComponent, PageAddClientComponent, FormAddClientComponent, PageViewComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    IconModule,
    TemplatesModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
