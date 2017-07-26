import { Component, OnInit } from '@angular/core';
import "fullcalendar";
import * as moment from 'moment';
import * as jQuery from 'jquery';
import { MyEvent } from './MyEvent.model'


@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

    events: any[];

    header: any;

    event: MyEvent;

    dialogVisible: boolean = false;

    idGen: number = 100;

    constructor() { }


    handleDayClick(event) {
        this.event = new MyEvent();
        this.event.start = event.date.format();
        this.dialogVisible = true;


    }

    handleEventClick(e) {
        this.event = new MyEvent();
        this.event.title = e.calEvent.title;

        let start = e.calEvent.start;
        let end = e.calEvent.end;
        if (e.view.name === 'month') {
            start.stripTime();
        }

        if (end) {
            end.stripTime();
            this.event.end = end.format();
        }

        this.event.id = e.calEvent.id;
        this.event.start = start.format();
        this.event.allDay = e.calEvent.allDay;
        this.dialogVisible = true;
    }

    saveEvent() {
      
    }

    ngOnInit() {


        this.header = {
            left: 'prev,next today',
            center: 'title'
            
        };
    }

}
