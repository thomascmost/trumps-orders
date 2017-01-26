import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TrumpOrderComponent }  from './trump-order.component';
import { TOFooterComponent } from './footer.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, TrumpOrderComponent, TOFooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }