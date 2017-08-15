import { Component, OnInit } from '@angular/core';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import {LoginuserService} from '../../loginuser.service';


@Component({
  selector: 'app-formworker',
  templateUrl: './formworker.component.html',
  styleUrls: ['./formworker.component.css']
})
export class FormworkerComponent implements OnInit {

  display: boolean = false;
  displaythankyou: boolean = false;
  serverResponse: any;


  constructor(private http: Http, private lu: LoginuserService) { 

        console.log("form worker");
        console.log(this.lu.role+ ","+ this.lu.facebookId+ ","+ this.lu.sysId);            
        console.log("data received from service");
  }

  ngOnInit() {
      console.log("Form worker init");
      const headers: Headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Content-Type','application/x-www-form-urlencoded');

   /*let params: URLSearchParams = new URLSearchParams();
    params.set('Workerid', this.Workerid);*/

   const options = new RequestOptions({
     headers: headers
     //params: params
   });

    let baseUrl ="http://localhost:58816/api/worker/workerPreferences?workerId="+this.lu.sysId;
    this.http.get(baseUrl, options)
      // Call map on the response observable to get the parsed people object
      .map((res: Response) => res.json())
      // Subscribe to the observable to get the parsed people object and attach it to the
      // component
      .subscribe(data => console.log(data));

      //console.log(JSON.stringify(this.serverResponse));
  }

  showDialog() {
        this.display = true;
       
    }

    showDialogThankyou()
    {
      this.displaythankyou = true;
    }







}
