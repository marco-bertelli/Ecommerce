import { HttpCommunicationsService } from './../../core/http-communications/http-communications.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { switchMap, map } from 'rxjs/operators';

import { UpdateProdotti,initProdotti } from './articoli.action';
import { Prodotto } from '../../core/model/prodotto.interface';


@Injectable()
export class ArticoliEffects {

    retrieveAllTodos$ = createEffect(() => this.actions$.pipe(
        ofType(initProdotti),
        switchMap(() => this.httpCommunicationsService.retrieveGetCall<Prodotto[]>("prodotti").pipe(
            map(prodotti => UpdateProdotti({ prodotti }))
        ))
    ));


    constructor(private actions$: Actions,
        private httpCommunicationsService: HttpCommunicationsService) {
    }
}