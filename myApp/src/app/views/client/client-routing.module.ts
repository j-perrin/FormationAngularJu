import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageClientComponent } from './page/page-client/page-client.component';

const routes: Routes = [
  { path: '', component: PageClientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
