import { LoginState } from './login.reducer';
import { createSelector } from '@ngrx/store';
import { AppState } from '..';


export const selectLoginState= (state:AppState)=>state.loginState;

export const selectUser=createSelector(
    selectLoginState,
    (state:LoginState)=>state.user
)