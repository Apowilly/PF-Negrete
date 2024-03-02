import { Injectable } from '@angular/core';
import { Observable, catchError, delay, finalize, map, mergeMap, of, throwError } from 'rxjs';
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
  
  borrarUsuario(id: number){
   // this.usuarios = this.usuarios.filter((el) => el.id != id);
    //return this.getUsuarios();
    if(confirm('¿Esta seguro de Eliminar el Usuario?')){ 
      return this.httpClient.delete<User>('http://localhost:3000/users/'+id)
    .pipe(
      delay(1000), 
      mergeMap(() => this.getUsuarios()),
      finalize(() => this.loadingService.setIsLoading(false))
    )  }
    this.loadingService.setIsLoading(true)
    return this.getUsuarios()
  }

  verificarUsuario(email: string, password: string): Observable<User[] | []> {
    this.loadingService.setIsLoading(true);
    const url = 'http://localhost:3000/users?email='+email+'&password='+password;
    console.log(url)
    return this.httpClient.get<User[]>(url)
      .pipe(
        delay(1000),
        finalize(() => this.loadingService.setIsLoading(false))
      );
  }

  verificarEmail(email: string): Observable<User[] | []> {
    this.loadingService.setIsLoading(true);
    const url = 'http://localhost:3000/users?email='+email;
    console.log(url)
    return this.httpClient.get<User[]>(url)
      .pipe(
        delay(1000),
        finalize(() => this.loadingService.setIsLoading(false))
      );
  }


}
