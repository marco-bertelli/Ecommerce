import {Prodotto} from '../../core/model/prodotto.interface';

import { createReducer, on ,Action} from '@ngrx/store';
import { UpdateCarrello, insertProdotto } from './carrello.action';

export interface CarrelloState{
    prodotti:Prodotto[];
}

export const initialState:CarrelloState={
    prodotti:[ ]
}

const ProdottiReducer=createReducer(
    initialState,
    on(UpdateCarrello,(state,{prodotti})=>({...state,prodotti:prodotti})),
    on(insertProdotto, (state, {prodotto }) => ({ ...state, prodotti: [...state.prodotti, prodotto] }))
)

export function reducerCarrello(state:CarrelloState | undefined, action :Action){
    return(ProdottiReducer(state,action));
}