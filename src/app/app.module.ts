import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { DashboardModule } from './layouts/dashboard/dashboard.module';
import { LoginModule } from './layouts/authregistro/pages/login/login.module';



@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [BrowserModule,AppRoutingModule, BrowserAnimationsModule,DashboardModule,LoginModule,MatProgressSpinnerModule],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
