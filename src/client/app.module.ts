import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { TrumpOrderComponent }  from './trump-order.component';
import { TOFooterComponent } from './footer.component';
import { HomePageComponent } from './home-page.component';
import { DispositionPageComponent } from './disposition-page.component';
import { SourcesPageComponent } from './sources-page.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, JsonpModule ],
  declarations: [ AppComponent, 
                  TrumpOrderComponent, 
                  TOFooterComponent,
                  HomePageComponent,
                  DispositionPageComponent,
                  SourcesPageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }