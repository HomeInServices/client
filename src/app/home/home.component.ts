import { Component, OnInit } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';

import { FacebookService, InitParams, LoginResponse, LoginOptions  } from 'ngx-facebook';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data:any;
  constructor(private http:Http, private fb: FacebookService) { 

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
      .then((response: LoginResponse) => console.log('Logged in', response))
      .catch(e => console.error('Error logging in'));
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
