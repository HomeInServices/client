import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { WorkerModule } from './worker/worker.module';
import { ClientModule } from './client/client.module';
import { HeaderComponent } from './header/header.component';
import { RecommenderModule} from './recommender/recommender.module';
import {CalendarModule} from './calendar/calendar.module';



const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {
    path: 'worker',
    loadChildren: 'app/worker/worker.module#WorkerModule'
  },  
  {
    path: 'user',
    loadChildren: 'app/client/client.module#ClientModule'
},

  {
    path: 'home', 
    loadChildren: 'app/home/home.module#HomeModule'
  },
  {
    path: 'recommender', 
    loadChildren: 'app/recommender/recommender.module#RecommenderModule'
  },
  {
    path: 'schedule', 
    loadChildren: 'app/calendar/calendar.module#CalendarModule'
  }  

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]

})

export class AppRoutingModule
{

}
