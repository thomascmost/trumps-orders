require('./sass/index');

import 'zone.js';
import 'reflect-metadata';
import { Component, Input } from '@angular/core';
import { Order } from './order';

@Component({
  selector: 'trump-order',
  template: `
   <div class="trump-order">
      <img class="trump-order-img" src="img/main.png"/>

      <div class="number">
         {{index+1}}
      </div>
      <div class="contents">
         <h4 class="name">{{order.name}}</h4>
         <h6 class="description">{{order.description}}</h6>
      </div>
   </div>`
})

export class TrumpOrderComponent {
   @Input() index: number;
   @Input() order: Order;
}

