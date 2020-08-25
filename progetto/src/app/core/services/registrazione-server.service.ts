import { Injectable } from '@angular/core';
import { HttpCommunicationsService } from '../http-communications/http-communications.service';
import { User } from '../model/user.interface';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class RegistrazioneServerService {

  constructor(private httpCommunications: HttpCommunicationsService) { }

  insertUser(user: User): Observable<User>{
    return this.httpCommunications.retrievePostCall("users", user);
  }
  
}
