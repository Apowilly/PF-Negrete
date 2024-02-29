import { Injectable } from '@angular/core';
import { Observable, catchError, delay, finalize, mergeMap, of, tap, throwError } from 'rxjs';
import { CursoModel } from '../models';
import { LoadingService } from '../../../../../core/services/loading.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cursos: CursoModel[] = [];
  constructor(
    private loadingService: LoadingService,private httpClient: HttpClient) { }
  getCursos(): Observable<CursoModel[]> {this.loadingService.setIsLoading(true)
   // return of(this.cursos).pipe(delay(1000), finalize(() => this.loadingService.setIsLoading(false) ));
   return this.httpClient.get<CursoModel[]>('http://localhost:3000/courses')
                .pipe(
                  delay(1000), 
                  finalize(() => this.loadingService.setIsLoading(false)),
                  catchError(() => {
                      console.error('Error')
                      return of([]);
                    })
                  )

  }

  buscarCurso(id: number){this.loadingService.setIsLoading(true)
    const c = this.cursos.find((el) => el.id == id);
    console.log({c});
    this.loadingService.setIsLoading(true);
    return this.httpClient.get<CursoModel>(`http://localhost:3000/courses/${id}`)
     .pipe(delay(1000), finalize(() => this.loadingService.setIsLoading(false)),
     catchError(() => {
       this.loadingService.setIsLoading(false)
       console.error('Error')
       return of();
     }))
  }
  


  agregarCurso(curso: CursoModel) {this.loadingService.setIsLoading(true)
    const id = String(new Date().getTime());
    //this.cursos = [...this.cursos, curso]
    //return this.getCursos();
    //console.log("id", id)
    return this.httpClient.post<CursoModel>('http://localhost:3000/courses',{
      ...curso, id,
    })
    .pipe(
      delay(1000), 
      mergeMap(() => this.getCursos()),
      finalize(() => this.loadingService.setIsLoading(false))
    )
  }

  editarCurso(editandoCursos: CursoModel) {this.loadingService.setIsLoading(true)
    console.log(editandoCursos)
   return this.httpClient.put(`http://localhost:3000/courses/${editandoCursos.id}`, editandoCursos).pipe(
    mergeMap(() => this.getCursos()),
    finalize(() => this.loadingService.setIsLoading(false),
    )
    );
  }

  
  borrarCurso(id: number){this.loadingService.setIsLoading(true)
    this.cursos = this.cursos.filter((el) => el.id != id);
    //return this.getCursos();
    return this.httpClient.delete<CursoModel>('http://localhost:3000/courses/' + id)
    .pipe(
      delay(1000), 
      mergeMap(() => this.getCursos()),
      finalize(() => this.loadingService.setIsLoading(false))
    )
  }

  private obtenerNuevoId(): number {
    const ids = this.cursos.map(c => c.id);
    return ids.length > 0 ? Math.max(...ids) + 1 : 1;
  }
}
