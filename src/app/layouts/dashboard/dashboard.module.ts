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

import {MatListModule} from '@angular/material/list'; 
import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
  declarations: [ DashboardComponent],
  imports: [CommonModule, MatSidenavModule,MatButtonModule,MatToolbarModule,MatListModule,MatIconModule, 
    UserModule,MatTreeModule, CursosModule,
    DashboardRoutingModule
  ],
  exports:[DashboardComponent],
 

  
})
export class DashboardModule { }

/**
 * 
 * 
 *  RouterModule.forChild([{

    
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

 


  ]
  
 */