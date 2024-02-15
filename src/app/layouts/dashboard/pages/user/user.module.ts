import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {MatTableModule} from '@angular/material/table'; 
import {MatButtonModule} from '@angular/material/button';
import { UserFormularioComponent } from './components/user-formulario/user-formulario.component'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatSelectModule} from '@angular/material/select'; 
import { ReactiveFormsModule } from '@angular/forms';
import {MatTreeModule} from '@angular/material/tree'; 
import {MatIconModule} from '@angular/material/icon'; 
import { SharedModule } from '../../../../shared/shared.module';
import { UserDetalleComponent } from './components/user-detalle/user-detalle.component';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserComponent, UserFormularioComponent, UserDetalleComponent],

  imports: [CommonModule,MatTableModule ,MatButtonModule,
            MatFormFieldModule,MatInputModule,MatSelectModule,
            ReactiveFormsModule,MatTreeModule,MatIconModule,
            SharedModule,RouterModule,UserRoutingModule],
            
  exports: [UserComponent],
})
export class UserModule { }
