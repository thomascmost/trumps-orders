require('./sass/index');

import 'zone.js';
import 'reflect-metadata';
import { Component } from '@angular/core';

import { Order } from './order';
import { ExecAction } from './exec-action';

import { OrdersDispositionService } from './orders.service'

@Component({
  selector: 'home-page',
  providers: [OrdersDispositionService],
  template: `
  <div class="page">
     <h1>Trump's Orders</h1>
     <p>Not all of these are technically executive orders; but all are 'executive actions' demanding compliance.</p>
     <p>Though enforcement of such actions has always been unclear, many institutions have already capitulated, or faced mass-firings for resisting.</p>
     <p>Mr. President, we are watching.</p>
     <div class="orders">
      <trump-order *ngFor="let order of orders; let i = index"
          [index]="i"
          [order]="order">
       </trump-order>
     </div>
  </div>`
})

export class HomePageComponent {
   private ordersService: OrdersDispositionService
   orders: ExecAction[];
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
      this.ordersService.getActions()
         .subscribe(
            orders => this.orders = orders.sort(function(a: ExecAction, b: ExecAction){
              var keyA = a.date,
                  keyB = b.date
              // Compare the 2 dates
              if(keyB.isAfter(keyA)) return -1;
              if(keyA.isAfter(keyB)) return 1;
              return 0;
          }), //Bind to view
            err => {
               // Log errors if any
               console.log(err);
            });
    }
}

