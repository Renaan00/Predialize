import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ClientDetailsComponent } from './client-details.component';
import { ClientDetailsTotalsModule } from './client-details-totals/client-details-totals.module';

@NgModule({
  declarations: [
    ClientDetailsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    ClientDetailsTotalsModule
  ],
  exports: [
    ClientDetailsComponent
  ]
})
export class ClientDetailsModule { }
