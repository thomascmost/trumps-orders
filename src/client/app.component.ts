require('./sass/index');

import 'zone.js';
import 'reflect-metadata';
import { Component } from '@angular/core';

import { Order } from './order';

@Component({
  selector: 'trumps-orders-app',
  template: `
  <div class="app">
     <img src="img/main.png"/>
     <router-outlet></router-outlet>
     <to-footer></to-footer>
  </div>`
  
})

export class AppComponent {
  orders: Order[];
  error: any;
  showNgFor = false; 
}

