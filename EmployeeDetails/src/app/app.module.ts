import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from 'ng-sidebar';
import { UserComponent } from './user/user.component';
import { LocationComponent } from './location/location.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


const appRoutes : Routes = [
  {
    path:'user',
    component : UserComponent
  },
  {
    path:'location',
    component:LocationComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
