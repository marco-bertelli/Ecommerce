import { LoginState } from './login/login.reducer';
import { ProdottiState } from './articoli/articoli.reducer';
import { CarrelloState } from './carrello/carrello.reducer';

export interface AppState{
    loginState:LoginState;
    prodottiState:ProdottiState;
    carrelloState:CarrelloState;
}