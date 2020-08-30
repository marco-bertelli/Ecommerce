import { ProdottiState } from './articoli.reducer';
import { createSelector } from '@ngrx/store';
import { AppState } from '..';

export const selectProdottiState =(state:AppState)=>state.prodottiState;

export const selectProdotti=createSelector(
    selectProdottiState,
    (state:ProdottiState)=>{
        console.log(state)
        return state.hasOwnProperty('prodotti') ? state.prodotti : []
    }
);
export const getProdottoById = createSelector(
    selectProdottiState,
    (state: ProdottiState, props: { id: number }) => state.prodotti.find(item => item.id === props.id)
);