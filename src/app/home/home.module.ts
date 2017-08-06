import { NgModule } from "@angular/core";

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
/**
 * Home Module
 */
@NgModule({
    imports: [        
         HomeRoutingModule
    ],
    declarations: [
        HomeComponent
    ],
    providers: [],
    exports: [
        HomeComponent
    ]
})
export class HomeModule { }