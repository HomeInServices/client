import { Component, OnInit } from '@angular/core';
import { Hire } from './hire.model';
import {DataworkerService} from '../../services/dataworker.service';


@Component({
  selector: 'app-menuclient',
  templateUrl: './menuclient.component.html',
  styleUrls: ['./menuclient.component.css']
})
export class MenuclientComponent implements OnInit {

  errorMessage: string;
   val: number = 2;
   display: boolean = false;

//   hires:Hire[];

  constructor(private workerservice:DataworkerService) { }

  ngOnInit() {
  //  this.getworkers();
    
  }

  showDialog() {
        this.display = true;
    }


    getworkers()
    {
     this.workerservice.getworkerlist()
     .subscribe(
       hires => this.hires = hires,
       error => this.errorMessage = <any>error);
     
    }


 hires: Hire[] = [
     new Hire("Mateo perez","http://bit.ly/2qV31YJ","cooking","cleaning","beautiful","http://bit.ly/2sbagvp"),
     new Hire("Susi Collins","http://bit.ly/2sZTZFV","cooking","cleaning","beautiful","http://bit.ly/2sbagvp"),
     new Hire("Shelly Tauber","http://bit.ly/2uXdCjr","cooking","cleaning","beautiful","http://bit.ly/2sbagvp")
  
 ];
  

}
