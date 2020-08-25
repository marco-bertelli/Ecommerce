import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/core/model/user.interface';
import { addUser } from 'src/app/redux/login/login.action';

@Injectable({
  providedIn: 'root'
})
export class RegistrazioneService {

  constructor(private store: Store) { }
  
  addUser(user:User){
    this.store.dispatch(addUser({user}));
  }
  
}
