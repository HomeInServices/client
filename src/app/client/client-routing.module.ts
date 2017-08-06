import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';
import { FormclientComponent } from './formclient/formclient.component';
import { MenuclientComponent } from './menuclient/menuclient.component';
import { ThankyouclientComponent } from './thankyouclient/thankyouclient.component';



/**
 * Client Routing module
 */
@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ClientComponent }, 
            {
                path: 'menuclient',
                component: MenuclientComponent
            },
            {
                path: 'formclient',
                component: FormclientComponent
            },           
        ])
    ],
    exports: [RouterModule]
})
export class ClientRoutingModule { }