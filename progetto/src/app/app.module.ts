import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { reducerLogin } from './redux/login/login.reducer';
import { reducerProdotti } from './redux/articoli/articoli.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './redux/login/login.effects';
import { ArticoliEffects } from './redux/articoli/articoli.effects';
import {IvyCarouselModule} from 'angular-responsive-carousel'; //messo qua per sicurezza da rimuovere alla fine perchè nello shared

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environment
import { reducerCarrello } from './redux/carrello/carrello.reducer';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    StoreModule.forRoot({loginState: reducerLogin, prodottiState :reducerProdotti ,carrelloState:reducerCarrello}),
    EffectsModule.forRoot([LoginEffects,ArticoliEffects]),
    IvyCarouselModule,
    MDBBootstrapModule.forRoot(),
    
    
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    
    
    BrowserAnimationsModule,
    

  ],
  
  providers: [],
  exports:[
    MDBBootstrapModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
