import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscripcionComponent } from './pages/inscripcion/inscripcion.component';
import { CursosDetalleComponent } from './pages/cursos/components/cursos-detalle/cursos-detalle.component';
import { UserDetalleComponent } from './pages/user/components/user-detalle/user-detalle.component';
import { adminGuard } from '../../core/guards/admin.guard';

const routes: Routes = [

  {
    path: 'cursos',
    loadChildren:() =>
    import('./pages/cursos/cursos.module').then((m)=>m.CursosModule),
  },
  {
    path: 'cursos/:id',
    component: CursosDetalleComponent,
  },
  {
    path: 'user',
    canActivate:[adminGuard],
    loadChildren:() =>
    import('./pages/user/user.module').then((m)=> m.UserModule),
  },
{
  path: 'user/:id',
  component: UserDetalleComponent,
},
{
  path: 'home',
  loadChildren:() =>
  import('./pages/home/home.module').then((m)=> m.HomeModule),
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule{ }



