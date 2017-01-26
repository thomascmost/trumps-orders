require('./sass/index');

import 'zone.js';
import 'reflect-metadata';
import { Component } from '@angular/core';

import { Order } from './order';

import { OrdersDispositionService } from './orders.service'

@Component({
   selector: 'disposition-page',
   providers: [OrdersDispositionService],
   template: `
   <div class="page">
       <h2>Trump's Orders</h2>
       <p>Executive Order dispositions retrieved from the Federal Register may take several days if not weeks to update.</p>
       <div class="orders">
         <trump-order *ngFor="let order of orders; let i = index"
               [index]="i"
               [order]="order">
          </trump-order>
       </div>
   </div>`
})

export class DispositionPageComponent {
   private ordersService: OrdersDispositionService
   orders: Order[];
   error: any;
   showNgFor = false; 
   constructor (private OrdersDispositionService: OrdersDispositionService)
   {
      this.ordersService = OrdersDispositionService
   }
   ngOnInit() {
      // Load comments
      this.loadOrders()
   }

   loadOrders() {
      // Get all comments
      this.ordersService.getOrders()
         .subscribe(
            orders => this.orders = orders, //Bind to view
            err => {
               // Log errors if any
               console.log(err);
            });
    }

}

