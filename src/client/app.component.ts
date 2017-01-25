require('./sass/index');

import 'zone.js';
import 'reflect-metadata';
import { Component } from '@angular/core';

import Order from './order.class';

@Component({
  selector: 'trumps-orders-app',
  template: `
  <div id="app">
     <img src="img/main.png"/>
     <h1>Trump's Orders</h1>
     <p>In his first three days, Trump signed more executive orders than any other US President has signed in their first week.</p>
     <p>Mr. President, we are watching.</p>
     <div class="orders">
      <!-- <trump-order *ngFor="let order of orders"
          [order]="order">
       </trump-order> -->
     </div>
  </div>`
})

export class AppComponent implements OnInit {
  orders: Order[];
  error: any;
  showNgFor = false; 
  // constructor ()
  // {
  //    this.orders = [
  //       new Order("foo","bar"),
  //       new Order("beep","boop")
  //    ]
  // }
}

