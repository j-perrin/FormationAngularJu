import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageListUserComponent } from './pages/page-list-user/page-list-user.component';
import { TemplatesModule } from 'src/app/templates/templates.module';


@NgModule({
  declarations: [PageListUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    TemplatesModule
  ]
})
export class UserModule { }
