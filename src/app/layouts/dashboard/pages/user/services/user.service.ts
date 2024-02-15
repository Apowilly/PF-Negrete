import { Injectable } from '@angular/core';
import { Observable, catchError, delay, finalize, mergeMap, of, throwError } from 'rxjs';
import { LoadingService } from '../../../../../core/services/loading.service';
import { User } from '../models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usuarios: User[] = [];
  constructor(
    private loadingService: LoadingService,private httpClient: HttpClient ) { }

  getUsuarios(): Observable<User[]> {this.loadingService.setIsLoading(true)
    //return of(this.usuarios).pipe(delay(1000), finalize(() => this.loadingService.setIsLoading(false) ));
    return this.httpClient.get<User[]>('http://localhost:3000/users')
    .pipe(
      delay(1000), 
      finalize(() => this.loadingService.setIsLoading(false)),
      catchError(() => {
          console.error('Error')
          return of([]);
        })
      )
  }


  agregarUsuario(usuario: User) {this.loadingService.setIsLoading(true)
  //  usuario.id = this.obtenerNuevoId();
   // this.usuarios = [...this.usuarios, usuario]
    //return this.getUsuarios();
    return this.httpClient.post<User>('http://localhost:3000/users',{
      ...usuario, id: usuario.id.toString(),
    })
    .pipe(
      delay(1000), 
      mergeMap(() => this.getUsuarios()),
      finalize(() => this.loadingService.setIsLoading(false))
    )
  }

  editarUsuario(editandousuario: User) {this.loadingService.setIsLoading(true)
   

      return this.httpClient.put(`http://localhost:3000/users/${editandousuario.id}`, editandousuario).pipe(
        mergeMap(() => this.getUsuarios()),
        finalize(() => this.loadingService.setIsLoading(false),
        )
        );
  
 
  }

  buscarUsuario(id: number){this.loadingService.setIsLoading(true)
    const u = this.usuarios.find((el) => el.id == id);
    //console.log({u});
    //return of(u).pipe(
      //delay(1000),
      //finalize(() => this.loadingService.setIsLoading(false) )
    //);
    this.loadingService.setIsLoading(true);
       return this.httpClient.get<User>(`http://localhost:3000/users/${id}`)
        .pipe(delay(1000), finalize(() => this.loadingService.setIsLoading(false)),
        catchError(() => {
          this.loadingService.setIsLoading(false)
          console.error('Error')
          return of();
        }))

  }
  
  borrarUsuario(id: number){this.loadingService.setIsLoading(true)
   // this.usuarios = this.usuarios.filter((el) => el.id != id);
    //return this.getUsuarios();
    return this.httpClient.delete<User>('http://localhost:3000/users/'+id)
    .pipe(
      delay(1000), 
      mergeMap(() => this.getUsuarios()),
      finalize(() => this.loadingService.setIsLoading(false))
    )
  }

  private obtenerNuevoId(): number {
    const ids = this.usuarios.map(c => c.id);
    return ids.length > 0 ? Math.max(...ids) + 1 : 1;
  }
}
