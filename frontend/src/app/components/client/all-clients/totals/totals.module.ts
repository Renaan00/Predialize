import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalsComponent } from './totals.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    TotalsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class TotalsModule { }
