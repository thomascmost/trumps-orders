require('./sass/index');

import 'zone.js';
import 'reflect-metadata';
import { Component } from '@angular/core';

@Component({
  selector: 'to-footer',
  template: `
   <footer>

   <a routerLink="/">Home</a>
   <a routerLink="/disposition">Dispositions</a>
   <a routerLink="/sources">Sources</a>
   <div class="credit">Created by <a href="https://www.twitter.com/thomascmost" target="_blank">Thomas Constantine Moore</a></div>
   </footer>`
})

export class TOFooterComponent {}
