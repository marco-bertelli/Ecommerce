import { HttpCommunicationsService } from './../../core/http-communications/http-communications.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';

import { switchMap, map } from 'rxjs/operators';

import { UpdateProdotti,initProdotti } from './articoli.action';
import { Prodotto } from '../../core/model/prodotto.interface';


@Injectable()
export class ArticoliEffects {

    retrieveProdotti$ = createEffect(() => this.actions$.pipe(
        ofType(initProdotti),
        switchMap(() => this.httpCommunicationsService.retrieveGetCall<Prodotto[]>("prodotti").pipe(
            map(prodotti => UpdateProdotti({ prodotti }))
        ))
    ));

    initProdotti$ = createEffect(() => this.actions$.pipe(
        ofType(ROOT_EFFECTS_INIT),
            map(() => initProdotti())
    ));


    constructor(private actions$: Actions,
        private httpCommunicationsService: HttpCommunicationsService) {
    }
}