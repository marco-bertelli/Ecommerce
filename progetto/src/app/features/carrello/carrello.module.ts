import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrelloRoutingModule } from './carrello-routing.module';
import { CarrelloComponent } from './carrello.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [CarrelloComponent],
  imports: [
    CommonModule,
    CarrelloRoutingModule,
    MDBBootstrapModule.forRoot(),
  ]
})
export class CarrelloModule { }
