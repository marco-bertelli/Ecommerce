import { ElementSchemaRegistry } from '@angular/compiler';
import { HostListener } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {loadStripe, Stripe} from '@stripe/stripe-js';


@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss']
})
export class PagamentoComponent implements OnInit {

  handler:any = null;
  
  @Input() amount;
  @Input() description;

 

  confirmation: any;
  loading = false;

  constructor() { }

 ngOnInit() {
  this.loadStripe();
}

pay() {   

  var handler = (window).StripeCheckout.configure({
    key: 'pk_test_51HT6ptBr9u4wm4oKXGt0xgrY7bjEPC1WE38GzHLlrg1pnHXHIzG3eQf7QyGovuKL22zthxgzKwzUD8FW8hsXLXEX00XQTW6kn5',
    locale: 'auto',
    token: function (token: any) {
      
      console.log(token)
      alert('PAGAMENTO EFFETTUATO');
    }
  });

  handler.open({
    name: 'Demo Site',
    description: '2 widgets',
    amount: this.amount * 100
  });

}

loadStripe() {

  if(!window.document.getElementById('stripe-script')) {
    var s = window.document.createElement("script");
    s.id = "stripe-script";
    s.type = "text/javascript";
    s.src = "https://checkout.stripe.com/checkout.js";
    s.onload = () => {
      this.handler = (window).StripeCheckout.configure({
        key: 'pk_test_51HT6ptBr9u4wm4oKXGt0xgrY7bjEPC1WE38GzHLlrg1pnHXHIzG3eQf7QyGovuKL22zthxgzKwzUD8FW8hsXLXEX00XQTW6kn5',
        locale: 'auto',
        token: function (token: any) {
          // You can access the token ID with `token.id`.
          // Get the token ID to your server-side code for use.
          console.log(token)
          alert('Payment Success!!');
        }
      });
    }

    window.document.body.appendChild(s);
  }
}

}

