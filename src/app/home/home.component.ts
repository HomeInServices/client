import { Component, OnInit } from '@angular/core';
import {Http, RequestOptions, Headers, URLSearchParams,Response } from '@angular/http';
import {Router} from '@angular/router';
import { FacebookService, InitParams, LoginResponse, LoginOptions  } from 'ngx-facebook';
import {LoginuserService} from '../loginuser.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  private serverResponse:any;
  //data:any;
  constructor(private http:Http, private fb: FacebookService, private router: Router, private lu: LoginuserService) { 

    let initParams: InitParams = {
      appId: '1734115113548184',
      xfbml: true,
      version: 'v2.9'
    };
 
    this.fb.init(initParams);
  }

  ngOnInit() {

    console.log('home');
  } 

  login(){

    // login with options
    const options: LoginOptions = {
      scope: 'public_profile,user_friends,email,user_photos',
      return_scopes: true,
      enable_profile_selector: true
    };

    this.fb.login(options)
      .then((response: LoginResponse) => this.getDataFB(response)
    )
      .catch(e => console.error('Error logging in'));
  }
getDataFB(response: LoginResponse){

  {
    
    let locVar = "worker";
    let accessToken = response.authResponse.accessToken.toString();
    let facebookID = response.authResponse.userID.toString();
    
   
    const headers: Headers = new Headers();
   headers.append('Accept', 'application/json');
   headers.append('Content-Type', 'application/json');
   headers.append('Access-Control-Allow-Origin', '*');
   headers.append('Content-Type','application/x-www-form-urlencoded');

   let params: URLSearchParams = new URLSearchParams();
    params.set('loc', locVar);
    params.set('aT', accessToken);
    params.set('fId', facebookID);

   const options = new RequestOptions({
     headers: headers,
     params: params
   });

    let baseUrl ="http://localhost:58816/api/home/reg"
    this.http.get(baseUrl, options)
      // Call map on the response observable to get the parsed object
      .map((res: Response) => res.json())
      // Subscribe to the observable to get the parsed object and attach it to the
      // component
      .subscribe(data => {
        //this.lu.facebookId = data.
        console.log(data);
        this.lu.role = data.role;
        this.lu.facebookId = data.facebookId;
        this.lu.sysId = data.sysId;

        this.router.navigateByUrl('/appstart/worker/formworker');
      } );
      //.subscribe(data => console.log(data) );

      //console.log(JSON.stringify(this.serverResponse));
      //this.router.navigateByUrl('/appstart/worker/formworker');
      
    }
}

  /*
  login(){
    
    {
   const headers: Headers = new Headers();
   headers.append('Accept', 'application/json');
   headers.append('Content-Type', 'application/json');
   headers.append('Access-Control-Allow-Origin', '*');
   headers.append('Content-Type','application/x-www-form-urlencoded');

   const options = new RequestOptions({
     headers: headers
   });

    let baseUrl ="http://localhost:58816/api/login/exlogin/worker" 
    this.http.get(baseUrl, options)
      // Call map on the response observable to get the parsed people object
      .map(res => res.json())
      // Subscribe to the observable to get the parsed people object and attach it to the
      // component
      .subscribe(data => this.data = data);

      console.log(this.data);
    }
  
  }
*/
}
