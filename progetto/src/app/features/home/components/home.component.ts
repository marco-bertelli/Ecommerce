import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/core/model/prodotto.interface';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
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

  prodotti:Prodotto[]=[
    {
      nome:"si",
      colore:"si",
      testo:"si",
      Ctesto:"si"
    },
  ];

  constructor(private store: Store,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.subscription.add(this.store.pipe(select(selectProdotti)
    ).subscribe(prodotti => {
      this.prodotti=prodotti;
    }));

    console.log(this.prodotti);
  }



}


