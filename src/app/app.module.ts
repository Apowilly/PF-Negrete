import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { DashboardModule } from './layouts/dashboard/dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './core/store';



@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [BrowserModule,
            AppRoutingModule, 
            BrowserAnimationsModule,
            DashboardModule,
            MatProgressSpinnerModule,
            HttpClientModule,
            StoreModule.forRoot(appReducer, {}), 
            StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
