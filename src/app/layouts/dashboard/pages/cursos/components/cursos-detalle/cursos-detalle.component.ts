import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { CursoModel } from '../../models';

@Component({
  selector: 'app-cursos-detalle',
  templateUrl: './cursos-detalle.component.html',
  styleUrl: './cursos-detalle.component.scss'
})
export class CursosDetalleComponent {

  cursos?: CursoModel ;
  dataSource?: {
    id: string,
    asignatura: string
  }[]  = [];

  displayedColumns: string[] = ['id', 'nombre'];

  constructor(
              private route: ActivatedRoute,
              private dataService: DataService
    ){
      console.log(this.route.snapshot.params['id']);
      //console.log(this.route.snapshot.queryParams);

      this.dataService.buscarCurso(this.route.snapshot.params['id']).subscribe({
        next: (c) => {
          this.cursos = c; 
        }
      })

  }
}
