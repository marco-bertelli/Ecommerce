import { HttpCommunicationsService } from './../../core/http-communications/http-communications.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { addUser, UpdateUser } from './login.action';
import { switchMap, map } from 'rxjs/operators';
import { User } from '../../core/model/user.interface';


@Injectable()
export class LoginEffects{

    addUser$ = createEffect(() =>this.actions$.pipe(
        ofType(addUser),
        switchMap(action => this.httpCommunicationsService.retrievePostCall<User>("users",action.user).pipe(
            switchMap(user => {
                return [UpdateUser({user})]
            }) 
        ))
    ));

    constructor(private actions$: Actions,
        private httpCommunicationsService: HttpCommunicationsService) {
    }
}