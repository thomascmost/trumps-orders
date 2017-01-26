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
     this.url = "http://www.federalregister.gov/api/v1/documents/2017-01799?callback=JSONP_CALLBACK"
   }

     getOrders() : Observable<Order[]> {
        return this._jsonp.get(this.url)
          .map(function(res: Response){
              let json = res.json();
              let orders = []
              orders.push(new Order(json.title, ""))
              return orders;
          }).catch(function(error: any){return Observable.throw(error);
        });
    }

//https://www.federalregister.gov/documents/search.json?conditions%5Bcorrection%5D=0&conditions%5Bpresident%5D=&conditions%5Bpresidential_document_type_id%5D=2&conditions%5Btype%5D=PRESDOCU&fields%5B%5D=citation&fields%5B%5D=document_number&fields%5B%5D=end_page&fields%5B%5D=executive_order_notes&fields%5B%5D=executive_order_number&fields%5B%5D=html_url&fields%5B%5D=pdf_url&fields%5B%5D=publication_date&fields%5B%5D=signing_date&fields%5B%5D=start_page&fields%5B%5D=title&fields%5B%5D=full_text_xml_url&fields%5B%5D=body_html_url&fields%5B%5D=json_url&order=executive_order_number&per_page=1000