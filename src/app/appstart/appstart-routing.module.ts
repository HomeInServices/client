import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WorkerModule } from '../worker/worker.module';
import { ClientModule } from '../client/client.module';
import { RecommenderModule} from '../recommender/recommender.module';
import { CalModule } from '../calendar/calendar.module';
/**
 * Routing module
 */
@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'worker',
                loadChildren: 'app/worker/worker.module#WorkerModule'
            },  
            {
                path: 'user',
                loadChildren: 'app/client/client.module#ClientModule'
            },
            {
                path: 'recommender', 
                loadChildren: 'app/recommender/recommender.module#RecommenderModule'
            },
            {
                path: 'schedule', 
                loadChildren: 'app/calendar/calendar.module#CalModule'
            }              
        ])
    ],
    exports: [RouterModule]
})
export class AppstartRoutingModule { }