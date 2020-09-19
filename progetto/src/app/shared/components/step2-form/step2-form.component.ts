import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Prodotto } from 'src/app/core/model/prodotto.interface';

@Component({
  selector: 'app-step2-form',
  templateUrl: './step2-form.component.html',
  styleUrls: ['./step2-form.component.scss']
})
export class Step2FormComponent implements OnInit {

  @Output()
  formSubmitEvent: EventEmitter<any> = new EventEmitter();

  @Output()
  undoEvent: EventEmitter<any> = new EventEmitter();

  indirizzoForm: FormGroup;

  ngOnInit(): void {
  }

  constructor(private fb: FormBuilder) {
    this.indirizzoForm = this.fb.group({
        nome: ['',Validators.required],
        cognome: ['',Validators.required],
        cellulare: ['',Validators.required],
        città: ['',Validators.required],
        cap: ['',Validators.required],
        indirizzo: ['',Validators.required],
        numero: ['',Validators.required],
        informazioni: ['',Validators.required],
    });
  }

  confirmChanges() {
    this.formSubmitEvent.emit(this.indirizzoForm.value);
  }

  cancel() {
    this.undoEvent.emit(this.indirizzoForm.value);
  }

}
