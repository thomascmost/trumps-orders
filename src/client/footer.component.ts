require('./sass/index');

import 'zone.js';
import 'reflect-metadata';
import { Component } from '@angular/core';

@Component({
  selector: 'to-footer',
  template: `
   <footer>

   <a routerLink="/">Home</a>
   <a routerLink="/all-actions">All Executive Actions</a>
   <div class="credit">Source: <a target="_blank" href="https://www.federalregister.gov/executive-orders">Federal Register</a></div>
   <div class="credit">Created by <a href="https://www.twitter.com/thomascmost" target="_blank">Thomas Constantine Moore</a></div>
   </footer>`
})

export class TOFooterComponent {}
