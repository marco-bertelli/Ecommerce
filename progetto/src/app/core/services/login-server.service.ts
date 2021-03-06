import { Injectable } from '@angular/core';
import { User } from '../model/user.interface';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from '../http-communications/http-communications.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServerService {

  constructor(private httpCommunications: HttpCommunicationsService) { }

  retrieveUser(username:string,password:string): Observable<User[]>{
    return this.httpCommunications.retrieveGetCall<User[]>("users?username="+username+"&&password="+password);
  }

}
