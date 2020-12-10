import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAddOrderComponent } from '../order/pages/page-add-order/page-add-order.component';
import { PageAddClientComponent } from './page/page-add-client/page-add-client.component';
import { PageClientComponent } from './page/page-client/page-client.component';

const routes: Routes = [
  { path: '', component: PageClientComponent},
  { path: 'add', component: PageAddClientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
