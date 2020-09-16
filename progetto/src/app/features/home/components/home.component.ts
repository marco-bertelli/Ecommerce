import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/core/model/prodotto.interface';
import { Store, select, on } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { selectProdotti } from 'src/app/redux/articoli';
import { Subscription } from 'rxjs';
import { initProdotti } from 'src/app/redux/articoli/articoli.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  subscription=new Subscription();

  prodotti:Prodotto[]=[];
  //immagini per carosello
  images = [
    {path:"./assets/img/tacchino-2.jpg"},
    {path:"./assets/img/t.jpg"},
  ];

  constructor(private store: Store,private router: Router) { }

  ngOnInit(): void {

    this.subscription.add(this.store.pipe(select(selectProdotti)
    ).subscribe(prodotti => {
      this.prodotti=prodotti;
    }));

    console.log(this.prodotti);
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


