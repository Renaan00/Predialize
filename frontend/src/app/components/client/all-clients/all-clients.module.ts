import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { AllClientsComponent } from './all-clients.component';
import { TotalsComponent } from './totals/totals.component';

@NgModule({
  declarations: [
    AllClientsComponent,
    TotalsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    AllClientsComponent
  ]
})
export class AllClientsModule { }
