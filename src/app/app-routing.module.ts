import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { UserComponent } from './layouts/dashboard/pages/user/user.component';
import { HomeComponent } from './layouts/dashboard/pages/home/home.component';
import { LoginComponent } from './layouts/authregistro/pages/login/login.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate:[authGuard],
    component: DashboardComponent,
    loadChildren: ()=>import('./layouts/dashboard/dashboard.module').then((m)=>m.DashboardModule)
  },
/*   {
    path: 'cursos',
    loadChildren:() =>
    import('./layouts/dashboard/pages/cursos/cursos.module').then((m)=>m.CursosModule),
  }, */
    {
    path: 'auth',
    loadChildren:() =>
    import('./layouts/authregistro/authregistro.module').then((m)=> m.AuthregistroModule),
  },
/*   {
    path: 'user',
    loadChildren:() =>
    import('./layouts/dashboard/pages/user/user.module').then((m)=> m.UserModule),
  }, */

  {
    path: '**',
    redirectTo: 'dashboard',
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
