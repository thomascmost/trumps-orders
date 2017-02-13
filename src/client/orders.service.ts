/* * * ./app/comments/services/comment.service.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import { Order } from './order';
import { ExecAction } from './exec-action';

import * as moment from 'moment';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Jsonp} from '@angular/http';

@Injectable()
export class OrdersDispositionService {
  private _jsonp: any;
  private eoUrl: string;
  private eaUrl: string;
   constructor(_jsonp: Jsonp) {
     this._jsonp = _jsonp;
     this.eoUrl = "https://www.federalregister.gov/api/v1/documents?conditions[correction]=0&conditions[president]=donald-trump&conditions[presidential_document_type_id]=2&conditions[type]=PRESDOCU&fields[]=citation&fields[]=document_number&fields[]=end_page&fields[]=executive_order_notes&fields[]=executive_order_number&fields[]=html_url&fields[]=pdf_url&fields[]=publication_date&fields[]=signing_date&fields[]=start_page&fields[]=title&fields[]=full_text_xml_url&fields[]=json_url&fields[]=body_html_url&order=executive_order_number&per_page=1000&callback=JSONP_CALLBACK"
     this.eaUrl = "https://www.federalregister.gov/api/v1/documents?conditions[correction]=0&conditions[president]=donald-trump&conditions[type]=PRESDOCU&fields[]=citation&fields[]=document_number&fields[]=end_page&fields[]=executive_order_notes&fields[]=executive_order_number&fields[]=html_url&fields[]=pdf_url&fields[]=publication_date&fields[]=signing_date&fields[]=start_page&fields[]=title&fields[]=full_text_xml_url&fields[]=json_url&fields[]=body_html_url&order=executive_order_number&per_page=1000&callback=JSONP_CALLBACK"
   }

     getOrders() : Observable<Order[]> {
        return this._jsonp.get(this.eoUrl)
          .map(function(res: Response){
              let json = res.json();
              let jsonOrders= json.results
              let orders: Order[] = []
              for (let i=0; i<jsonOrders.length; i++)
              {
                console.log(jsonOrders[i]);
                let eo = jsonOrders[i]
                let description = "Executive Order " + eo.executive_order_number + ": Signed " + moment(eo.signing_date).format('ll')
                orders.push(new Order(eo.title, description,eo.body_html_url, eo.signing_date))
              }
              return orders;
          }).catch(function(error: any){return Observable.throw(error);
        });
    }

     getActions() : Observable<ExecAction[]> {
        return this._jsonp.get(this.eaUrl)
          .map(function(res: Response){
              let json = res.json();
              let jsonOrders= json.results
              let actions: ExecAction[] = []
              for (let i=0; i<jsonOrders.length; i++)
              {
                console.log(jsonOrders[i]);
                let eo = jsonOrders[i]
                let description = (eo.executive_order_number?("Executive Order " + eo.executive_order_number +": "):"") + (eo.signing_date?("Signed " + moment(eo.signing_date || eo.publication_date).format('ll')):"") 
                actions.push(new ExecAction(eo.title, description, eo.body_html_url, eo.signing_date || eo.publication_date))
              }
              return actions;
          }).catch(function(error: any){return Observable.throw(error);
        });
    }

    getFullText(url:string): Observable<string> {
      return this._jsonp.get(url + "?callback=JSONP_CALLBACK")
      .map(function(res: Response){
              let json = res.json();

              return json;
          }).catch(function(error: any){return Observable.throw(error);
        }); 
    }
  }
