import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Prodotto } from 'src/app/core/model/prodotto.interface';
import { filter, switchMap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { getProdottoById } from 'src/app/redux/articoli';
import { insertProdotto } from 'src/app/redux/carrello/carrello.action';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss']
})
export class CustomizeComponent implements OnInit {

  private subscription: Subscription = new Subscription();
  prodotto:Prodotto;
  
  constructor(private route: ActivatedRoute, private store: Store) { }

  ngOnInit(): void {
    this.subscription.add(this.route.params.pipe(
      filter(params => params != null && params['id'] != null),
      switchMap(params => this.store.pipe(select(getProdottoById, { id: Number(params['id']) }))),
    ).subscribe(prodotto => {
      this.prodotto = prodotto;
    }));
  }
  editForm(prodotto) {
    //inserimento del prodotto
    this.store.dispatch(insertProdotto({prodotto}));
    
    this.prodotto=prodotto;
    
  }
  undo() {
    this.prodotto=this.prodotto;
  }
}
