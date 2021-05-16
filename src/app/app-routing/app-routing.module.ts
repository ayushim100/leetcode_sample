import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { routes } from './routes';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule
  ]
})
export class AppRoutingModule { }
