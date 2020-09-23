import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MatBadgeModule} from '@angular/material/badge';
import { DropdownModule, MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    IvyCarouselModule,
    MatBadgeModule,
    DropdownModule,
    MDBBootstrapModule.forRoot(),
  ]
})
export class HomeModule { }
