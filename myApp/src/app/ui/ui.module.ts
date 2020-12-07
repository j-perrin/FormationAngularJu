import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { IconNavComponent } from '../icon/icon-nav/icon-nav.component';
import { IconModule } from '../icon/icon.module';



@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    ContentComponent
  ]
})
export class UiModule { }
