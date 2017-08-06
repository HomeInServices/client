import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WorkerComponent } from './worker.component';
import { ThankyouworkerComponent } from './thankyouworker/thankyouworker.component';
import { MenuworkerComponent } from './menuworker/menuworker.component';
import { FormworkerComponent } from './formworker/formworker.component';

/**
 * Routing module
 */
@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: WorkerComponent },
            {
                path: 'formworker',
                component: FormworkerComponent
            },
            {
                path: 'menuworker',
                component: MenuworkerComponent
            },

        ])
    ],
    exports: [RouterModule]
})
export class WorkerRoutingModule { }

