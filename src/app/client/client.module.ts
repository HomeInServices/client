import { NgModule } from "@angular/core";

import { ClientComponent } from './client.component';
import { FormclientComponent } from './formclient/formclient.component';
import { MenuclientComponent } from './menuclient/menuclient.component';
import { ThankyouclientComponent } from './thankyouclient/thankyouclient.component';

import {ClientRoutingModule} from './client-routing.module';

/**
 * Client Module
 */
@NgModule({
    imports: [  
        ClientRoutingModule
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
    ]
})
export class ClientModule { }