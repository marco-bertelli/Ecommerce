import { LoginState } from './login/login.reducer';
import { ProdottiState } from './articoli/articoli.reducer';

export interface AppState{
    loginState:LoginState;
    prodottiState:ProdottiState;
}