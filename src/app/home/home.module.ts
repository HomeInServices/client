import { NgModule } from "@angular/core";

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FacebookModule, FacebookService } from 'ngx-facebook';

/**
 * Home Module
 */
@NgModule({
    imports: [        
         HomeRoutingModule,
         FacebookModule.forRoot()
    ],
    declarations: [
        HomeComponent
    ],
    providers: [FacebookService],
    exports: [
        HomeComponent
    ]
})
export class HomeModule { }