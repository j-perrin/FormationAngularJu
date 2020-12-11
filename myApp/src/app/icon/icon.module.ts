import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconNavComponent } from './icon-nav/icon-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconEditComponent } from './icon-edit/icon-edit.component';
import { IconDeleteComponent } from './icon-delete/icon-delete.component';
import { IconDecoComponent } from './icon-deco/icon-deco.component';
import { IconFilterComponent } from './icon-filter/icon-filter.component';
import { IconViewComponent } from './icon-view/icon-view.component';



@NgModule({
  declarations: [IconNavComponent, IconEditComponent, IconDeleteComponent, IconDecoComponent, IconFilterComponent, IconViewComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    IconNavComponent,
    IconEditComponent,
    IconDeleteComponent,
    IconDecoComponent,
    IconFilterComponent,
    IconViewComponent
  ]
})
export class IconModule { }
