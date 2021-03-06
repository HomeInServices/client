import { Injectable } from '@angular/core';
import { Hire } from '../client/menuclient/hire.model';
import { Http,Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DataworkerService {

  private workerurl:string = "https://jsonplaceholder.typicode.com/users";

  constructor(private http:Http) { }


  getworkerlist(): Observable<Hire[]>
  {
    return this.http.get(this.workerurl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
 
  private extractData(res:Response)
  {
    // only use body.data if there is data property in JSON
    let body = res.json();
    return body || {};
  }

  private handleError (error: Response | any) {
    
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }






}
