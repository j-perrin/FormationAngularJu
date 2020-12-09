import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageListUserComponent } from './pages/page-list-user/page-list-user.component';

const routes: Routes = [
  { path: '', component: PageListUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
