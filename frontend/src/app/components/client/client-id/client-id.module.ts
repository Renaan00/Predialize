import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ClientIdComponent } from './client-id.component';

@NgModule({
  declarations: [
    ClientIdComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    ClientIdComponent
  ]
})
export class ClientIdModule { }
