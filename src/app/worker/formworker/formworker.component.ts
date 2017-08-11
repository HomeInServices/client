import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-formworker',
  templateUrl: './formworker.component.html',
  styleUrls: ['./formworker.component.css']
})
export class FormworkerComponent implements OnInit {

  display: boolean = false;
  displaythankyou: boolean = false;



  constructor() { }

  ngOnInit() {
      console.log("Form worker init");
  }

  showDialog() {
        this.display = true;
       
    }

    showDialogThankyou()
    {
      this.displaythankyou = true;
    }







}
