import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/core/model/prodotto.interface';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { selectCarrello } from 'src/app/redux/carrello';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {

  step=0;

  subscription=new Subscription();
  prodotti:Prodotto[]=[];
  indirizzo;
  
  constructor(private store: Store,private router: Router) { }

  ngOnInit(): void {
    this.subscription.add(this.store.pipe(select(selectCarrello)
    ).subscribe(prodotti => {
      this.prodotti=prodotti;
    }));
  }

  stepS(){
    this.step++;
  }
salvaForm(indirizzo){
  this.indirizzo=indirizzo;
  console.log(this.indirizzo)
}
undo() {
  this.indirizzo=this.indirizzo;
}
}
