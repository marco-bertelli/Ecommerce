import {Prodotto} from '../../../app/core/model/prodotto.interface';
import { UpdateProdotti } from './articoli.action';
import { createReducer, on ,Action} from '@ngrx/store';

export interface ProdottiState{
    prodotti:Prodotto[];
}

export const initialState:ProdottiState={
    prodotti:null
}

const ProdottiReducer=createReducer(
    initialState,
    on(UpdateProdotti,(state,{prodotti})=>({...state,prodotti:prodotti})),
)

export function reducerProdotti(state:ProdottiState | undefined, action :Action){
    return(ProdottiReducer(state,action));
}