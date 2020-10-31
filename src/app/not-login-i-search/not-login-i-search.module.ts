import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotLoginISearchPageRoutingModule } from './not-login-i-search-routing.module';

import { NotLoginISearchPage } from './not-login-i-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotLoginISearchPageRoutingModule
  ],
  declarations: [NotLoginISearchPage]
})
export class NotLoginISearchPageModule {}
