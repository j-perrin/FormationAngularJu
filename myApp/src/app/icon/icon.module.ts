import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconNavComponent } from './icon-nav/icon-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconEditComponent } from './icon-edit/icon-edit.component';
import { IconDeleteComponent } from './icon-delete/icon-delete.component';
import { IconDecoComponent } from './icon-deco/icon-deco.component';



@NgModule({
  declarations: [IconNavComponent, IconEditComponent, IconDeleteComponent, IconDecoComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    IconNavComponent,
    IconEditComponent,
    IconDeleteComponent,
    IconDecoComponent,
  ]
})
export class IconModule { }
