import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlService } from './core/services/control.service';
import { PageClientComponent } from './views/client/page/page-client/page-client.component';
import { PageHomeComponent } from './views/home/pages/page-home/page-home.component';
import { PageListOrderComponent } from './views/order/pages/page-list-order/page-list-order.component';
import { PageNotFoundComponent } from './views/page-not-found/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: PageHomeComponent},
  { path: 'orders', canActivate: [ControlService], loadChildren: () => import('./views/order/order.module').then(m => m.OrderModule)},
  //{ path: 'orders', component: PageListOrderComponent},
  { path: 'clients', canActivate: [ControlService], loadChildren: () => import('./views/client/client.module').then(m => m.ClientModule)},
  //{ path: 'clients', component: PageClientComponent},
  { path: 'users', canActivate: [ControlService], loadChildren: () => import('./views/user/user.module').then(m => m.UserModule)},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
