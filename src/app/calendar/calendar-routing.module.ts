import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar.component';

/**
 * Routing module
 */
@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: CalendarComponent },            
        ])
    ],
    exports: [RouterModule]
})
export class CalendarRoutingModule { }