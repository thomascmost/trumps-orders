require('./sass/index');

import 'zone.js';
import 'reflect-metadata';
import { Component } from '@angular/core';

@Component({
  selector: 'to-footer',
  template: `
   <footer>
      Created by <a href="https://www.twitter.com/thomascmost" target="_blank">Thomas Constantine Moore</a>
   </footer>`
})

export class TOFooterComponent {}
