import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { CommonModule } from '@angular/common';

import { CalendarComponent } from './calendar.component';
import { CalendarRoutingModule} from './calendar-routing.module';

import {ScheduleModule,CalendarModule} from 'primeng/primeng';

/**
 * Calendar Module
 */
@NgModule({
    imports: [        
        CalendarRoutingModule,
        ScheduleModule,
        CalendarModule, 
        CommonModule      
    ],
    declarations: [
        CalendarComponent
    ],
    providers: [],
    exports: [
        CalendarComponent
    ],
    
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA] 
})
export class CalModule { }