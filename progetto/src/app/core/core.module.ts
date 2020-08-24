import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpCommunicationsService } from './http-communications/http-communications.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [HttpCommunicationsService],
})
export class CoreModule { }
