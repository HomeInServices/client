import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule  } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Primeng components
import {AccordionModule} from 'primeng/primeng';     
import {MenuItem} from 'primeng/primeng';  
import {SliderModule} from 'primeng/primeng';  
import {RatingModule} from 'primeng/primeng';
import {ScheduleModule,CalendarModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {DataListModule} from 'primeng/primeng';
import {DataScrollerModule} from 'primeng/primeng';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule} from './app-routing.module';

import {DataworkerService} from './services/dataworker.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    SliderModule,
    RatingModule,
    ScheduleModule,
    CalendarModule,
    DialogModule,
    DataListModule,
    DataScrollerModule


  ],
  providers: [DataworkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
