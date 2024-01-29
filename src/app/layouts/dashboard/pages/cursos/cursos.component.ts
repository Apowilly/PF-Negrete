
import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Curso } from './models';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos: Curso[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.obtenerCursos();
  }

  private obtenerCursos(): void {
   this.dataService.getCursos().subscribe( {
      next:(curso) => this.cursos = curso
    });
  }
}

