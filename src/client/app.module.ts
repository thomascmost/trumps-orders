import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TrumpOrderComponent }  from './trump-order.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, TrumpOrderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }