import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';

import { ClientComponent } from './client.component';
import { FormclientComponent } from './formclient/formclient.component';
import { MenuclientComponent } from './menuclient/menuclient.component';
import { ThankyouclientComponent } from './thankyouclient/thankyouclient.component';

import {ClientRoutingModule} from './client-routing.module';

import {DialogModule, DataListModule, DataScrollerModule} from 'primeng/primeng';

/**
 * Client Module
 */
@NgModule({
    imports: [  
        ClientRoutingModule,
        DialogModule,
        DataListModule,
        DataScrollerModule,
        CommonModule
        
    ],
    declarations: [
        ClientComponent,
        FormclientComponent,
        MenuclientComponent,
        ThankyouclientComponent
    ],
    providers: [],
    exports: [
        ClientComponent,
        FormclientComponent,
        MenuclientComponent,
        ThankyouclientComponent
    ],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA] 
})
export class ClientModule { }