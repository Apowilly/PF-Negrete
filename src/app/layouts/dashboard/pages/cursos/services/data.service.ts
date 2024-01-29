
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; 
import { Curso } from '../models';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cursos: Curso[] = [
    {
      idCurso: 1,
      asignatura: 'Matemáticas Avanzadas',
      profesor: 'Dr. Rodríguez',
      horarios: ['Lunes 10:00 AM - 12:00 PM', 'Miércoles 2:00 PM - 4:00 PM'],
      cantidadAlumnos: 20
    },
    {
      idCurso: 2,
      asignatura: 'Tecnologias Software',
      profesor: 'Dr. Maria',
      horarios: ['Martes 10:00 AM - 12:00 PM', 'VIERNES 2:00 PM - 4:00 PM'],
      cantidadAlumnos: 25
    },
    {
      idCurso: 3,
      asignatura: 'Taller computacion',
      profesor: 'Dr. Juan Carlos',
      horarios: ['Jueves 10:00 AM - 12:00 PM', 'Jueves 2:00 PM - 4:00 PM'],
      cantidadAlumnos: 15
    },
  ];

  getCursos(): Observable<Curso[]> {
    return of(this.cursos);
  }
}
