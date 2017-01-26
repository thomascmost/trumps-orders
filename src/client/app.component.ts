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
     <h1>Trump's Orders</h1>
     <p>In his first three days, Trump signed more executive orders than any other US President has signed in their first week.</p>
     <p>Mr. President, we are watching.</p>
     <div class="orders">
      <trump-order *ngFor="let order of orders; let i = index"
          [index]="i"
          [order]="order">
       </trump-order>
     </div>
     <to-footer></to-footer>
  </div>`
})

export class AppComponent {
  orders: Order[];
  error: any;
  showNgFor = false; 
  constructor ()
  {
     this.orders = [
        new Order("ACA Rollback","Mr. Trump has allowed all agency heads to waive requirements of the Affordable Care Act to the “maximum extent permitted by law.”"),
        new Order("Regulation Freeze","The president has frozen all regulations now in process (but not approved) until they are approved by him or an agency after he took office. This means any regulation signed by former President Barack Obama in his final weeks in office — including some that deal with energy efficiency standards — are on hold until they’re reviewed by Trump’s administration."),
        new Order("Abortion","President Trump has ordered that federal dollars cannot go to organizations that provide abortion services."),
        new Order("Withdrawal from TPP","This memorandum withdraws the United States from all Trans-Pacific Partnership negotiations and from signing the trade deal."),
        new Order("Federal Hiring Freeze","The president has told agencies they cannot fill any vacant positions nor open new ones, with two exceptions: military personnel and critical public safety positions."),
        new Order("Dakota Access Pipeline","President Trump ordered that permits for the the Dakota Access Pipeline be approved in an expedited manner, “including easements or rights-of-way to cross Federal areas.” (Army denial of an easement was a previous victory for pipeline opponents.)"),
        new Order("Keystone Pipeline","In his Keystone memorandum, Mr. Trump invited TransCanada to resubmit its application for a pipeline permit, and he directed the State Department to issue a final decision on that application within 60 days."),
        new Order("Expedited Environmental Review","President Trump ordered that agencies and the chairman of the White House Council on Environmental Quality work together to set up faster deadlines and environmental approval for “high priority” infrastructure projects. It gives significant power and responsibility to the White House Council on Environmental Quality chairman, who will decide within 30 days if a proposed project is “high priority.” (The president has not yet nominated a new CEQ chairman.)"),
        new Order("American Pipelines: American Steel","President Trump directed the Commerce Secretary to come up with a plan to ensure that all pipelines built or repaired in the United States be constructed with American-made materials “to the maximum extent possible.”"),
        new Order("Review Manufacturing Regulations","In this memorandum, the president ordered the Commerce Secretary to begin a 60-day review of regulations for American manufacturers, with the aim of finding ways to speed up permitting and all federal processes for them."),
        new Order("Authorized Deportations, Defunding Sanctuaries","This is also a longer order with several major pieces (as above, no public link yet). The president has directed agencies to step up deportation of those in the country illegally. First, he prioritizes seven groups of people for deportation. It is anyone: convicted of a crime, charged with a crime, who has committed a chargeable offense, has misrepresented themselves to the government, has abused a welfare program, who is under deportation order and who may “in the judgment of an immigration officer, otherwise pose a risk to public safety or national security.” Second, the order also directs the hiring of 10,000 more Immigration and Customs Enforcement agents, though it states that is subject to funding. Third, it states the U.S. policy is now to allow local law enforcement officers to act as immigration officers whenever possible. Fourth, it orders the Attorney General and Secretary of Homeland Security to block federal grants from so-called “sanctuary” cities which do not enforce some immigration laws."),
        new Order("Border Wall","In this order, President Trump states it is the policy of the United States to immediately construct a wall on the southern border. The order directs agencies to begin planning and identify funding for the project, including sending requests to Congress. It also directs agencies to construct or contract out for more detention facilities at or near the Mexican border. This order also directs the hiring of an additional 5,000 border patrol agents, subject to funding. And it requires that all agencies identify any U.S. aid funds that have gone to Mexico in the past five years. (We are still awaiting an online link and will post when it appears.)")
     ]
  }
}

