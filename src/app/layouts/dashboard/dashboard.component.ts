import { Component } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from '../authregistro/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showFiller = false;
 
constructor(private router: Router,
   private route:ActivatedRoute,
   private authService : AuthService ){}

logout(): void{
  this.authService.logout();
}
}





