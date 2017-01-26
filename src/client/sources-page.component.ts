require('./sass/index');

import 'zone.js';
import 'reflect-metadata';
import { Component } from '@angular/core';

import { Order } from './order';

@Component({
  selector: 'sources-page',
  template: `
  <div class="page">
     <h1>Sources</h1>
  </div>`
})

export class SourcesPageComponent {
  error: any;
  showNgFor = false; 
  constructor ()
  {
  }
}

