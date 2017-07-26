import { Component, OnInit } from '@angular/core';
import {AccordionModule} from 'primeng/components/accordion/accordion';




@Component({
  selector: 'app-formrecommender',
  templateUrl: './formrecommender.component.html',
  styleUrls: ['./formrecommender.component.css']
})
export class FormrecommenderComponent implements OnInit {


  display: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  consumir()
  {
   

  }

   showDialog() {
        this.display = true;
    }

}
