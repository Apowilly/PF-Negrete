import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import { UserModule } from './pages/user/user.module';
import {MatTreeModule} from '@angular/material/tree'; 
import { CursosModule } from './pages/cursos/cursos.module';
import { InscripcionModule } from './pages/inscripcion/inscripcion.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import {MatListModule} from '@angular/material/list'; 
import { CursosComponent } from './pages/cursos/cursos.component';
import { InscripcionComponent } from './pages/inscripcion/inscripcion.component';
import { UserDetalleComponent } from './pages/user/components/user-detalle/user-detalle.component';
import { CursosDetalleComponent } from './pages/cursos/components/cursos-detalle/cursos-detalle.component';


@NgModule({
  declarations: [ DashboardComponent, HomeComponent],
  imports: [CommonModule, MatSidenavModule,MatButtonModule,MatToolbarModule,MatListModule,MatIconModule, UserModule,MatTreeModule, CursosModule,InscripcionModule,RouterModule.forChild([{

    
      path: 'home',
      component:HomeComponent,
    },
    {
      path: 'inscripciones',
      component:InscripcionComponent,
    },
    {
      path: 'cursos',
      component: CursosComponent,
    },
    {
      path: 'cursos/:id',
      component: CursosDetalleComponent,
      
    },
    {
    path: 'user',
    component: UserComponent,
  },

  {
    path: 'user/:id',
    component: UserDetalleComponent,
  },

 


  ])],
  exports:[DashboardComponent],
 

  
})
export class DashboardModule { }
