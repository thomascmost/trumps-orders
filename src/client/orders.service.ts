/* * * ./app/comments/services/comment.service.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import { Order } from './order';


// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Jsonp} from '@angular/http';

@Injectable()
export class OrdersDispositionService {
  private _jsonp: any;
  private url: string;
   constructor(_jsonp: Jsonp) {
     this._jsonp = _jsonp;
     this.url = "https://www.federalregister.gov/api/v1/documents?conditions[correction]=0&conditions[president]=donald-trump&conditions[presidential_document_type_id]=2&conditions[type]=PRESDOCU&fields[]=citation&fields[]=document_number&fields[]=end_page&fields[]=executive_order_notes&fields[]=executive_order_number&fields[]=html_url&fields[]=pdf_url&fields[]=publication_date&fields[]=signing_date&fields[]=start_page&fields[]=title&fields[]=full_text_xml_url&fields[]=body_html_url&order=executive_order_number&per_page=1000&callback=JSONP_CALLBACK"
   }

     getOrders() : Observable<Order[]> {
        return this._jsonp.get(this.url)
          .map(function(res: Response){
              let json = res.json();
              let jsonOrders= json.results
              let orders: Order[] = []
              for (let i=0; i<jsonOrders.length; i++)
              {
                orders.push(new Order(jsonOrders[i].title, ""))
              }
              return orders;
          }).catch(function(error: any){return Observable.throw(error);
        });
    }
  }

