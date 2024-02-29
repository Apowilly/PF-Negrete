import { Component } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from '../authregistro/services/auth.service';
import { Store } from '@ngrx/store';
import { UserState } from '../../core/store/usuario/reducers';
import { Observable } from 'rxjs';
import { selectUsuario } from '../../core/store/usuario/selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showFiller = false;
  usuario$: Observable<UserState | null>;

  constructor(private router: Router,
              private store:Store,
              private authService : AuthService ){

    this.usuario$ = this.store.select(selectUsuario)

  }

  logout(): void{
    this.authService.logout();
  }
}





