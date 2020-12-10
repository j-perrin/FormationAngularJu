import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitresAComponent } from './titres-a/titres-a.component';
import { TitresBComponent } from './titres-b/titres-b.component';
import { TitresCComponent } from './titres-c/titres-c.component';
import { TextsModule } from '../texts/texts.module';



@NgModule({
  declarations: [TitresAComponent, TitresBComponent, TitresCComponent],
  imports: [
    CommonModule,
    TextsModule
  ],
  exports: [
  TitresAComponent,
  TitresBComponent,
  TitresCComponent
  ]
})
export class TemplatesModule { }
