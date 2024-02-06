import { Injectable } from '@angular/core';
import { Observable, delay, finalize, of, throwError } from 'rxjs';
import { CursoModel } from '../models';
import { LoadingService } from '../../../../../core/services/loading.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cursos: CursoModel[] = [
    {
      idCurso: 1,
      asignatura: 'Matemáticas Avanzadas',
      profesor: 'Dr. Rodríguez',
      horarios: new Date(),
      cantidadAlumnos: 20
    },
    {
      idCurso: 2,
      asignatura: 'Tecnologias Software',
      profesor: 'Dr. Maria',
      horarios: new Date(),
      cantidadAlumnos: 25
    },
    {
      idCurso: 3,
      asignatura: 'Taller computacion',
      profesor: 'Dr. Juan Carlos',
      horarios: new Date(),
      cantidadAlumnos: 15
    },
  ];
  constructor(
    private loadingService: LoadingService) { }
  getCursos(): Observable<CursoModel[]> {this.loadingService.setIsLoading(true)
    return of(this.cursos).pipe(delay(1000), finalize(() => this.loadingService.setIsLoading(false) ));
  }

  buscarCurso(id: number){this.loadingService.setIsLoading(true)
    const c = this.cursos.find((el) => el.idCurso == id);
    console.log({c});
    return of(c).pipe(
      delay(1000),
      finalize(() => this.loadingService.setIsLoading(false) )
    );
  }
  


  agregarCurso(curso: CursoModel) {this.loadingService.setIsLoading(true)
    curso.idCurso = this.obtenerNuevoId();
    this.cursos = [...this.cursos, curso]
    return this.getCursos();
  }

  editarCurso(editandoCursos: CursoModel) {this.loadingService.setIsLoading(true)
    console.log(editandoCursos)
    this.cursos = this.cursos.map(c => {
      console.log(c.idCurso , editandoCursos.idCurso)
      if(c.idCurso === editandoCursos.idCurso){
        return editandoCursos
      }
      return c
    })
    return this.getCursos();
  }

  
  borrarCurso(idCurso: number){this.loadingService.setIsLoading(true)
    this.cursos = this.cursos.filter((el) => el.idCurso != idCurso);
    return this.getCursos();
  }

  private obtenerNuevoId(): number {
    const ids = this.cursos.map(c => c.idCurso);
    return ids.length > 0 ? Math.max(...ids) + 1 : 1;
  }
}
