import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

import { WorkerComponent } from './worker.component';
import { ThankyouworkerComponent } from './thankyouworker/thankyouworker.component';
import { MenuworkerComponent } from './menuworker/menuworker.component';
import { FormworkerComponent } from './formworker/formworker.component';

import { WorkerRoutingModule } from './worker-routing.module';
/**
 * Worker Module
 */
@NgModule({
    imports: [        
        WorkerRoutingModule,
        FormsModule,
        CommonModule
    ],
    declarations: [
      WorkerComponent,
       ThankyouworkerComponent,
       MenuworkerComponent,
       FormworkerComponent,
       
    ],
    providers: [],//[HttpService]
    exports: [
       WorkerComponent,
       ThankyouworkerComponent,
       MenuworkerComponent,
       FormworkerComponent
    ]
})
export class WorkerModule { }