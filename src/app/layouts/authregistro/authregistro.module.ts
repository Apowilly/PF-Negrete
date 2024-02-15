import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRegistroRoutingModule } from './authregistro-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatTreeModule} from '@angular/material/tree'; 
import { MatCardModule } from '@angular/material/card';
import {MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, AuthRegistroRoutingModule, 
    FormsModule,MatButtonModule,MatToolbarModule,
    MatIconModule,MatTreeModule,MatCardModule,MatInputModule,
    MatFormFieldModule,ReactiveFormsModule,]
})
export class AuthregistroModule { }
