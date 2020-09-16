
import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { ProdottiState } from '../articoli/articoli.reducer';
import { CarrelloState } from './carrello.reducer';

export const selectProdottiState =(state:AppState)=>state.carrelloState;

export const selectCarrello=createSelector(
    selectProdottiState,
    (state:CarrelloState)=>{
        return state.hasOwnProperty('prodotti') ? state.prodotti : []
    }
);

export const selectOggetti=createSelector(
    selectProdottiState,
    (state:CarrelloState)=>{
        return state.hasOwnProperty('prodotti') ? state.prodotti.length : 0
    }
);
