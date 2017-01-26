require('./sass/index');

import 'zone.js';
import 'reflect-metadata';
import { Component } from '@angular/core';

import { Order } from './order';

@Component({
  selector: 'sources-page',
  template: `
  <div class="page">
     <h2>Sources</h2>
     <div class="sources">
       <div class="source">
        PBS: <a target="_blank" href="http://www.pbs.org/newshour/rundown/10-executive-actions-trump-signed-far/">The 12 executive actions Trump has signed (so far)</a> -
        <a target="_blank" href="https://twitter.com/LisaDNews">Lisa Desjardins</a>
       </div>
       <div class="source">
        Politico: <a target="_blank" href="http://www.politico.com/agenda/story/2017/01/all-trump-executive-actions-000288">All of Trump’s executive actions so far</a> -
        <a target="_blank" href="https://twitter.com/quigleyaidan">Aidan Quigley</a>
       </div>
       <div class="source">
        Fox News: <a target="_blank" href="http://www.foxnews.com/politics/2017/01/24/list-trumps-executive-orders.html">List of Trump's executive orders</a>
       </div>
       <div class="source">
        Federal Register: <a target="_blank" href="https://www.federalregister.gov/executive-orders">(updated automatically as dispositions filed)</a>
       </div>
     </div>
  </div>`
})

export class SourcesPageComponent {
  error: any;
  showNgFor = false; 
  constructor ()
  {
  }
}

