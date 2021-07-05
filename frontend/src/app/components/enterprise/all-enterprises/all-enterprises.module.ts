import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllEnterprisesComponent } from './all-enterprises.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AllEnterprisesComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    AllEnterprisesComponent
  ]
})
export class AllEnterprisesModule { }
