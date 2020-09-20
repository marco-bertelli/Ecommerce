import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Prodotto } from 'src/app/core/model/prodotto.interface';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customize-form',
  templateUrl: './customize-form.component.html',
  styleUrls: ['./customize-form.component.scss']
})
export class CustomizeFormComponent implements OnInit {

  @Input()
  prodotto: Prodotto;

  @Output()
  formSubmitEvent: EventEmitter<Prodotto> = new EventEmitter();

  @Output()
  undoEvent: EventEmitter<Prodotto> = new EventEmitter();

  prodottoForm: FormGroup;
  

  
  ngOnInit(): void {
    console.log(this.prodotto)
    if(this.prodotto!=null){
      this.prodottoForm = this.fb.group({
        id:this.prodotto.id,
        nome: [this.prodotto.nome,Validators.required],
        colore: [this.prodotto.colore,Validators.required],
        testo: [this.prodotto.testo,Validators.required],
        Ctesto: [this.prodotto.Ctesto,Validators.required],
        Prezzo:this.prodotto.Prezzo
      });
    }
  }
  
  
  constructor(private fb: FormBuilder) {
    this.prodottoForm = this.fb.group({
      id:'',
        nome: ['',Validators.required],
        colore: ['',Validators.required],
        testo: ['',Validators.required],
        Ctesto: ['',Validators.required],
        Prezzo:''
    });
  }

  confirmChanges() {
    this.formSubmitEvent.emit(this.prodottoForm.value);
  }

  cancel() {
    this.undoEvent.emit(this.prodottoForm.value);
  }

}
