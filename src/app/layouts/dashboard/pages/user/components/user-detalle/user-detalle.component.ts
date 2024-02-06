import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models';

@Component({
  selector: 'app-user-detalle',
  templateUrl: './user-detalle.component.html',
  styleUrl: './user-detalle.component.scss'
})
export class UserDetalleComponent {

  usuario?: User ;
  dataSource?: {
    id: string,
    asignatura: string
  }[]  = [];

  displayedColumns: string[] = ['id', 'nombre'];

  constructor(
              private route: ActivatedRoute,
              private userService: UserService
    ){
      console.log(this.route.snapshot.params['id']);
      //console.log(this.route.snapshot.queryParams);

      this.userService.buscarUsuario(this.route.snapshot.params['id']).subscribe({
        next: (u) => {
          this.usuario = u; 
          this.dataSource = u?.cursos
        }
      })

  }
}
