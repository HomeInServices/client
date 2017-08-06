import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { RecommenderComponent } from './recommender.component';
import { FormrecommenderComponent } from './formrecommender/formrecommender.component';
import { ThankyourecommenderComponent } from './thankyourecommender/thankyourecommender.component';

/**
 * Routing module
 */
@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: RecommenderComponent },            
        ])
    ],
    exports: [RouterModule]
})
export class RecommenderRoutingModule { }