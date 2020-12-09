import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageListUserComponent } from './pages/page-list-user/page-list-user.component';
import { UserService } from 'src/app/core/services/user.service';


@NgModule({
  declarations: [PageListUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
