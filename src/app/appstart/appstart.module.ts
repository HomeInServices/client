import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import {AppstartComponent} from './appstart.component';
import { AppstartRoutingModule } from './appstart-routing.module';
/**
 * Appstart Module
 */
@NgModule({
    imports: [        
        CommonModule,
        AppstartRoutingModule,
        
    ],
    declarations: [
        AppstartComponent,
        HeaderComponent
    ],
    providers: [],
    exports: [
        AppstartComponent,
        HeaderComponent
    ],
    
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA] 
})
export class AppstartModule { 

    constructor()
    {
       console.log("Appstart Module");
    }
}