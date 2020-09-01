
import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { ProdottiState } from '../articoli/articoli.reducer';
import { CarrelloState } from './carrello.reducer';

export const selectProdottiState =(state:AppState)=>state.prodottiState;

export const selectProdotti=createSelector(
    selectProdottiState,
    (state:CarrelloState)=>{
        console.log(state)
        return state.hasOwnProperty('prodotti') ? state.prodotti : []
    }
);
