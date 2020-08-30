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
 this.activateRoute.paramMap.subscribe(params=>{
   console.log(params.get("id"));
 })
   

  }
}
