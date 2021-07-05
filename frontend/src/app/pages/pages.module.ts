import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from './home/home.module';
import { ClientModule } from './client/client.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    ClientModule
  ]
})
export class PagesModule { }
