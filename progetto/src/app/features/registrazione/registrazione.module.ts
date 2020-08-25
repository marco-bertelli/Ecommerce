import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrazioneRoutingModule } from './registrazione-routing.module';
import { RegistrazioneComponent } from './components/registrazione.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {RegistrazioneService} from './services/registrazione.service'


@NgModule({
  declarations: [RegistrazioneComponent],
  providers: [RegistrazioneService],
  imports: [
    CommonModule,
    RegistrazioneRoutingModule,
    SharedModule
  ],
  exports:[
    RegistrazioneComponent
  ]
})
export class RegistrazioneModule { }
