import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { LoginuserService } from '../../loginuser.service';

import { BasicInformation, SkillsPaymentOptions, WorkerEmployerInformation } from './formworker.model';


@Component({
  selector: 'app-formworker',
  templateUrl: './formworker.component.html',
  styleUrls: ['./formworker.component.css']
})
export class FormworkerComponent implements OnInit {

  display: boolean = false;
  displaythankyou: boolean = false;
  serverResponse: any;

  public bi: BasicInformation;
  public spo: SkillsPaymentOptions;
  public wei: WorkerEmployerInformation;


  constructor(private http: Http, private lu: LoginuserService) {

    console.log("form worker");
    console.log(this.lu.role + "," + this.lu.facebookId + "," + this.lu.sysId);
    console.log("data received from service");

    this.bi = new BasicInformation();
    this.spo = new SkillsPaymentOptions();
    this.wei = new WorkerEmployerInformation();

  }

  ngOnInit() {
    console.log("Form worker init");
    const headers: Headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    /*let params: URLSearchParams = new URLSearchParams();
     params.set('Workerid', this.Workerid);*/

    const options = new RequestOptions({
      headers: headers
      //params: params
    });

    let baseUrl = "http://localhost:58816/api/worker/workerPreferences?workerId=" + this.lu.sysId;
    this.http.get(baseUrl, options)
      // Call map on the response observable to get the parsed people object
      .map((res: Response) => res.json())
      // Subscribe to the observable to get the parsed people object and attach it to the
      // component
      .subscribe(data => {
        this.serverResponse = data;
        console.log(this.serverResponse)
        /**
         * Assign values here
         */

        this.bi.facebookid = this.lu._facebookId;
        this.bi.phone = this.serverResponse.Phone;
        this.bi.Street = this.serverResponse.Address[0].Street;
        this.bi.city = this.serverResponse.Address[0].City;
        this.bi.State = this.serverResponse.Address[0].State;
        this.bi.Zipcode = this.serverResponse.Address[0].Zipcode;
        this.bi.MilesWantToDrive = this.serverResponse.Availability.MilesWillingToDrive;

        this.spo.facebookid = this.lu._facebookId;
        this.spo.paymentType = this.serverResponse.Payment.PaymentMode;
        this.spo.SkillIds = this.serverResponse.Skills;//array

        this.wei.availability = this.serverResponse.Availability.AvailableDays;

        if (this.serverResponse.Employers != null) {
          this.wei.email = this.serverResponse.Employers.Email;
          this.wei.name = this.serverResponse.Employers.Name;
          this.wei.phone = this.serverResponse.Employers.Phone;
        }
        console.log("......");
        console.log(this.bi);
        console.log("......");
        console.log(this.spo);
        console.log("......");
        console.log(this.wei);
        console.log("......");

      });

    //console.log(JSON.stringify(this.serverResponse));
  }

  showDialog() {
    this.display = true;

  }

  showDialogThankyou() {
    this.displaythankyou = true;
  }

  BasicInformationPost() {
    let data = this.bi;
    let url = "http://localhost:58816/api/worker/workerBasicInformation";
    this.makePostCall(url,data);

  }
  SkillPaymentPost() {
    let data = this.spo;
    let url = "http://localhost:58816/api/worker/workerSkillsPaymentOptions";
    this.makePostCall(url,data);

  }
 /*   EmployerReferralPost() {
    let data = this.wei;
    let url = "http://localhost:58816/api/worker/workerBasicInformation";
    this.makePostCall(url,data);

  }  */


  /*General method for post call*/
  makePostCall(url: string, data: any, variable?: string, val?: any) {

    const headers: Headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    /*let params: URLSearchParams = new URLSearchParams();
    params.set('Workerid', this.Workerid);*/

    const options = new RequestOptions({
      headers: headers
      //params: params
    });
    let baseUrl = '';
    if (variable != null) {
      baseUrl = url + "?" + variable + "=" + val;
    }
    else {
      baseUrl = url;
    }

    let dataToPost = JSON.stringify(data);

    this.http.post(baseUrl, dataToPost, options)
      .map((res: Response) => res.json())
      .subscribe(
      data => {
        this.serverResponse = data;
        console.log('Result: ' + data);
      },
      error => {
        console.log('Error: ' + error);
      }
      );
  }


}
