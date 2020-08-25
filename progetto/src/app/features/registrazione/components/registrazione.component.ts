import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegistrazioneService } from '../services/registrazione.service';
import { User } from 'src/app/core/model/user.interface';
import { RegistrazioneServerService } from 'src/app/core/services/registrazione-server.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent implements OnInit {
  registrazioneForm: FormGroup;
  user:User={name :null,surname:null,username:null,password:null};

  constructor(fb: FormBuilder, private regService: RegistrazioneService) {
    this.registrazioneForm = fb.group({
      username: ['', Validators.required],
      name:['',Validators.required],
      surname:['',Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    
  }

  doRegistrazione() {

   this.user.name=this.registrazioneForm.get('name').value;
   this.user.surname=this.registrazioneForm.get('surname').value;
   this.user.password=this.registrazioneForm.get('password').value;
   this.user.username=this.registrazioneForm.get('name').value;

  this.regService.addUser(this.user);
  }

}
