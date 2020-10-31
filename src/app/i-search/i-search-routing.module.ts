import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ISearchPage } from './i-search.page';

const routes: Routes = [
  {
    path: '',
    component: ISearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ISearchPageRoutingModule {}
