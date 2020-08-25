import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpCommunicationsService } from './http-communications/http-communications.service';
import { HttpClientModule } from '@angular/common/http';
import {RegistrazioneServerService} from './services/registrazione-server.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [HttpCommunicationsService,RegistrazioneServerService],
})
export class CoreModule { }
