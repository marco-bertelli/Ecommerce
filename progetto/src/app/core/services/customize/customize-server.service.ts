import { Injectable } from '@angular/core';
import { HttpCommunicationsService } from '../../http-communications/http-communications.service';
import { Prodotto } from '../../model/prodotto.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomizeServerService {

  constructor(private httpCommunications: HttpCommunicationsService) { }

  retrieveUser(username:string,password:string): Observable<Prodotto[]>{
    return this.httpCommunications.retrieveGetCall<Prodotto[]>("users?username="+username+"&&password="+password);
  }

}
