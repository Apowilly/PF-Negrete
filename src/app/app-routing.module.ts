import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { UserComponent } from './layouts/dashboard/pages/user/user.component';
import { HomeComponent } from './layouts/dashboard/pages/home/home.component';
import { LoginComponent } from './layouts/authregistro/pages/login/login.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: ()=>import('./layouts/dashboard/dashboard.module').then((m)=>m.DashboardModule)
  },
    {
    path: 'auth/login',
    component: LoginComponent,
  },
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
