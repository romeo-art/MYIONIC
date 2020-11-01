import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotLoginISearchPage } from './not-login-i-search.page';

const routes: Routes = [
  {
    path: '',
    component: NotLoginISearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotLoginISearchPageRoutingModule {}
