import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

/**
 * Routing module
 */
@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: HomeComponent },            
        ])
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule { 
    constructor()
    {
       console.log("Home Routing module");
    }

    
}