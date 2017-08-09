import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { AppstartRoutingModule } from './appstart-routing.module';
/**
 * Appstart Module
 */
@NgModule({
    imports: [        
        CommonModule,
        AppstartRoutingModule
    ],
    declarations: [
        HeaderComponent
    ],
    providers: [],
    exports: [
        HeaderComponent
    ],
    
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA] 
})
export class AppstartModule { }