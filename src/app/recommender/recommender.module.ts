import { NgModule } from "@angular/core";

import { RecommenderComponent } from './recommender.component';
import { FormrecommenderComponent } from './formrecommender/formrecommender.component';
import { ThankyourecommenderComponent } from './thankyourecommender/thankyourecommender.component';

import {RecommenderRoutingModule} from './recommender-routing.module';
/**
 * Recommender Module
 */
@NgModule({
    imports: [        
            RecommenderRoutingModule
    ],
    declarations: [
        RecommenderComponent,
        FormrecommenderComponent,
        ThankyourecommenderComponent
    ],
    providers: [],
    exports: [
        RecommenderComponent,
        FormrecommenderComponent,
        ThankyourecommenderComponent
    ]
})
export class RecommenderModule { }