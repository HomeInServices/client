import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule  } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';






// Primeng components
import {AccordionModule} from 'primeng/primeng';     //accordion and accordion tab
import {MenuItem} from 'primeng/primeng';  
import {SliderModule} from 'primeng/primeng';  
import {RatingModule} from 'primeng/primeng';
import {ScheduleModule,CalendarModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {DataListModule} from 'primeng/primeng';
import {DataScrollerModule} from 'primeng/primeng';





        





import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkerComponent } from './worker/worker.component';
import { ClientComponent } from './client/client.component';
import { FormclientComponent } from './client/formclient/formclient.component';
import { MenuclientComponent } from './client/menuclient/menuclient.component';
import { MenuworkerComponent } from './worker/menuworker/menuworker.component';
import { FormworkerComponent } from './worker/formworker/formworker.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule} from './app-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { RecommenderComponent } from './recommender/recommender.component';
import { FormrecommenderComponent } from './recommender/formrecommender/formrecommender.component';
import { ThankyourecommenderComponent } from './recommender/thankyourecommender/thankyourecommender.component';
import { ThankyouworkerComponent } from './worker/thankyouworker/thankyouworker.component';
import { ThankyouclientComponent } from './client/thankyouclient/thankyouclient.component';

import {DataworkerService} from './services/dataworker.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkerComponent,
    ClientComponent,
    FormclientComponent,
    MenuclientComponent,
    MenuworkerComponent,
    FormworkerComponent,
    HeaderComponent,
    CalendarComponent,
    RecommenderComponent,
    FormrecommenderComponent,
    ThankyourecommenderComponent,
    ThankyouworkerComponent,
    ThankyouclientComponent
    


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
