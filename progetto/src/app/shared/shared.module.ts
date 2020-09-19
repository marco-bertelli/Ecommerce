import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './components/input-text/input-text.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { CustomizeFormComponent } from './components/customize-form/customize-form.component';
import { Step2FormComponent } from './components/step2-form/step2-form.component';
import { PagamentoComponent } from './components/pagamento/pagamento.component';



@NgModule({
  declarations: [
    InputTextComponent,
    CustomizeFormComponent,
    Step2FormComponent,
    PagamentoComponent,
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
    CustomizeFormComponent,
    Step2FormComponent,
    PagamentoComponent
  ]

})
export class SharedModule { }
