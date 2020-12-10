import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { FormAuthComponent } from './component/form-auth/form-auth.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PageHomeComponent, FormAuthComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
