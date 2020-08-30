import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './components/input-text/input-text.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { CustomizeFormComponent } from './components/customize-form/customize-form.component';



@NgModule({
  declarations: [
    InputTextComponent,
    CustomizeFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IvyCarouselModule
  ],
  exports:[
    InputTextComponent,
    FormsModule,
    ReactiveFormsModule,
    IvyCarouselModule,
    CustomizeFormComponent
  ]

})
export class SharedModule { }
