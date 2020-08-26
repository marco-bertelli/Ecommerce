import { createAction, props } from '@ngrx/store';
import {Prodotto} from '../../../app/core/model/prodotto.interface';

export const UpdateProdotti=createAction('[updating]prodotti',props<{prodotti:Prodotto[]}>());
export const initProdotti=createAction('[searching]prodotti');