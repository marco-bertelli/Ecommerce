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


@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    StoreModule.forRoot({loginState: reducerLogin, prodottiState :reducerProdotti }),
    EffectsModule.forRoot([LoginEffects,ArticoliEffects]),
    IvyCarouselModule,
    
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
