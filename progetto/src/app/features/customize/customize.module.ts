import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomizeRoutingModule } from './customize-routing.module';
import { CustomizeComponent } from './components/customize.component';
import { Prodotto } from 'src/app/core/model/prodotto.interface';
import { ActivatedRoute } from '@angular/router';


@NgModule({
  declarations: [CustomizeComponent],
  imports: [
    CommonModule,
    CustomizeRoutingModule
  ]
})
export class CustomizeModule { 

  item:Prodotto;

  constructor(private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    /* codice da attivare appena completo bene la home
    this.activateRoute.paramMap.subscribe(params=>{
    this.myHttpService.getSingolo(Number(params.get("id"))).subscribe(response => {
      this.item=response;
    }, err => {
    });
  })
  */
 this.activateRoute.paramMap.subscribe(params=>{
   console.log(params.get("id"));
 })
   

  }
}
