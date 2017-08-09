import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { AppstartModule } from './appstart/appstart.module'

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
    {
      path: 'home', 
      loadChildren: 'app/home/home.module#HomeModule'
    },
   {
      path: 'appstart', 
      loadChildren: 'app/appstart/appstart.module#AppstartModule'
    },

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
