import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/core/model/prodotto.interface';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { selectProdotti } from 'src/app/redux/articoli';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  prodotti:Prodotto[];

  constructor(private store: Store,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.store.pipe(select(selectProdotti)
    ).subscribe(prodotti => {
      this.prodotti=prodotti;
    });
  }

}
