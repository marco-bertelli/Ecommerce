import { createAction, props } from '@ngrx/store';
import {Prodotto} from '../../../app/core/model/prodotto.interface';

export const UpdateCarrello=createAction('[updating]carrello',props<{prodotti:Prodotto[]}>());
export const insertProdotto = createAction('[carrello] insert', props<{prodotto:Prodotto}>());
export const deleteProdotto = createAction('[carrello] delete', props<{id:number}>());