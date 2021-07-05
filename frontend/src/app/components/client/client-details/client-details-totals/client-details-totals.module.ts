import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDetailsTotalsComponent } from './client-details-totals.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ClientDetailsTotalsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ], 
  exports: [
    ClientDetailsTotalsComponent
  ]
})
export class ClientDetailsTotalsModule { }
