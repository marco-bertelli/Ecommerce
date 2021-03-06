import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/core/model/prodotto.interface';
import { Store, select, on } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { selectProdotti } from 'src/app/redux/articoli';
import { Subscription } from 'rxjs';
import { initProdotti } from 'src/app/redux/articoli/articoli.action';
import { selectCarrello, selectOggetti } from 'src/app/redux/carrello';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  subscription=new Subscription();
  //implementazione prodotti dinamici
  prodotti:Prodotto[]=[];
  //prodotti nel carrello
  carrello:Prodotto[]=[];
  //numero fisico per icona
  nProdotti=0;

  totale=0;

  //immagini per carosello
  images = [
    {path:"./assets/img/t-shirt.jpg"},
    {path:"./assets/img/t-shirt1.jpg"},
  ];

  constructor(private store: Store,private router: Router) { }

  ngOnInit(): void {

    this.subscription.add(this.store.pipe(select(selectProdotti)
    ).subscribe(prodotti => {
      this.prodotti=prodotti;
    }));

    this.subscription.add(this.store.pipe(select(selectCarrello)
    ).subscribe(prodotti => {
      this.carrello=prodotti;
    }));

    this.subscription.add(this.store.pipe(select(selectOggetti)
    ).subscribe(prodotti => {
      this.nProdotti=prodotti;
    }));

    this.calcolaPrezzo();
  }

  calcolaPrezzo(){
    this.totale=0;
    this.carrello.forEach(prodotto => {
      console.log(prodotto.Prezzo)
      this.totale+=prodotto.Prezzo;
    });
  }
  //metodo per customizzare e aggiungere al carrello
  selezionaProdotto($event){
  
    on($event.click)
    let a =$event.index;
    if(a!=null){
    console.log(a)
    this.router.navigate(['/customize',a]);
    }
    
  }



}


