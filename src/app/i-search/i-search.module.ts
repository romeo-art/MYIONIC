import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ISearchPageRoutingModule } from './i-search-routing.module';

import { ISearchPage } from './i-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ISearchPageRoutingModule
  ],
  declarations: [ISearchPage]
})
export class ISearchPageModule {}
