import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrazioneRoutingModule } from './registrazione-routing.module';
import { RegistrazioneComponent } from './components/registrazione.component';


@NgModule({
  declarations: [RegistrazioneComponent],
  imports: [
    CommonModule,
    RegistrazioneRoutingModule
  ],
  exports:[
    RegistrazioneComponent
  ]
})
export class RegistrazioneModule { }
