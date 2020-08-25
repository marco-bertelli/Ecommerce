
import { User } from 'src/app/core/model/user.interface';
import { createReducer, on ,Action} from '@ngrx/store';
import { UpdateUser } from './login.action';


export interface LoginState{
    user:User;
}

export const initialState:LoginState={
    user:null
}


const LoginReducer=createReducer(
    initialState,
    on(UpdateUser,(state,{user})=>({...state,user:user})),
)

export function reducerLogin(state:LoginState | undefined, action: Action){
    return(LoginReducer(state,action));
}