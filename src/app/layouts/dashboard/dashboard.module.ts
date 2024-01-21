import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import { UserModule } from './pages/user/user.module';
import {MatTreeModule} from '@angular/material/tree'; 



@NgModule({
  declarations: [ DashboardComponent],
  imports: [CommonModule, MatSidenavModule,MatButtonModule,MatToolbarModule,MatIconModule, UserModule,MatTreeModule ],
  exports:[DashboardComponent],
 

  
})
export class DashboardModule { }
