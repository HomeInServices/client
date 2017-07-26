import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorkerComponent } from './worker/worker.component';
import { ClientComponent } from './client/client.component';
import { FormclientComponent } from './client/formclient/formclient.component';
import { MenuclientComponent } from './client/menuclient/menuclient.component';
import { MenuworkerComponent } from './worker/menuworker/menuworker.component';
import { FormworkerComponent } from './worker/formworker/formworker.component';
import { HeaderComponent } from './header/header.component';
import { RecommenderComponent} from './recommender/recommender.component';
import { FormrecommenderComponent} from './recommender/formrecommender/formrecommender.component';
import {CalendarComponent} from './calendar/calendar.component';



const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {
    path: 'workers',
  component:WorkerComponent
},  
  {path: 'clients',
  component:ClientComponent
},
{
      path: 'workers/formworker',
      component: FormworkerComponent
    },
    {
      path: 'workers/menuworker',
      component: MenuclientComponent
    },
     {
      path: 'clients/menuclient',
      component: MenuclientComponent
    },
    {
      path: 'clients/formclient',
      component: FormclientComponent
    },
  {path: 'home', component:HomeComponent},
  {
    path: 'recommender', 
    component: RecommenderComponent
  },
    {
      path:'recommender/formrecommender',
      component: FormrecommenderComponent
    },
  {path: 'schedule', component:CalendarComponent},
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
