import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formclient',
  templateUrl: './formclient.component.html',
  styleUrls: ['./formclient.component.css']
})
export class FormclientComponent implements OnInit {


  displaythankyou:boolean = false;

  showDialogThankyou()
  {
    this.displaythankyou = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
