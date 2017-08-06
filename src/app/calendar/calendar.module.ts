import { NgModule } from "@angular/core";

import { CalendarComponent } from './calendar.component';
import { CalendarRoutingModule} from './calendar-routing.module';

/**
 * Calendar Module
 */
@NgModule({
    imports: [        
        CalendarRoutingModule       
    ],
    declarations: [
        CalendarComponent
    ],
    providers: [],
    exports: [
        CalendarComponent
    ]
})
export class CalendarModule { }