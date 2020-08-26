import { ProdottiState } from './articoli.reducer';
import { createSelector } from '@ngrx/store';
import { AppState } from '..';

export const selectProdottiState =(state:AppState)=>state.prodottiState;

export const selectProdotti=createSelector(
    selectProdottiState,
    (state:ProdottiState)=>state.prodotti
)