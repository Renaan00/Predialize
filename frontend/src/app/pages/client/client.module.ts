import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllClientsModule } from './../../components/client/all-clients/all-clients.module';

import { ClientComponent } from './client.component';

@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    CommonModule,
    AllClientsModule
  ],
  exports: [
    ClientComponent
  ]
})
export class ClientModule { }
