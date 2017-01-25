require('./sass/index');

import 'zone.js';
import 'reflect-metadata';
import { Component, Input } from '@angular/core';
import Order from './order.class';

@Component({
  selector: 'trumps-order',
  template: `
  <div class="trump-order">
     <img class="trump-order-img" src="img/main.png"/>
     <h4>{{mame}}</h4>
     <p>{{description}}</p>
  </div>`
})

export class TrumpOrderComponent {
  @Input() order: Order;

