import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModule } from '../login.module';
import { LoginServerService } from 'src/app/core/services/login-server.service';
import { User } from 'src/app/core/model/user.interface';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { UpdateUser } from 'src/app/redux/login/login.action';
import { selectUser } from 'src/app/redux/login';

@Injectable()
export class LoginService {

  constructor(private router: Router,private loginService:LoginServerService,private store:Store) { }

  

  executeLogin(username: string,password:string){
    
    this.loginService.retrieveUser(username,password).subscribe((users:User[])=>{
      //controllo se risposta è vuota
      if(users.length>0){
      //prendo l'unico utente
      let user:User;
      user=users[0];
      //lo metto nello store
      this.store.dispatch(UpdateUser({user}));
      }
    });

    //quando recupero
    this.store.pipe(select(selectUser),filter(currentUser=>!!currentUser)).subscribe((currentUser:User)=>{
      
      sessionStorage.setItem('user',JSON.stringify(currentUser));

      this.router.navigateByUrl("/home");
    });

    
  }
}
