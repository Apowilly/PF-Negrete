import { Injectable } from '@angular/core';
import { Observable, delay, finalize, of, throwError } from 'rxjs';
import { LoadingService } from '../../../../../core/services/loading.service';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usuarios: User[] = [
    {
      id: 1,
      nombre: 'Juan Pedro',
      apellido: 'Torres Gonzalez',
      email: 'jpg@ciisa.cl',
      telefono:'+56940427333',
      password: '12345',
      perfil: 'administrador',
      cursos: [{
        id: 1,
       asignatura: 'Matemáticas Avanzadas',
      },{
        id: 2,
        asignatura: 'Tecnologias Software',
      }
    ]
    },
      {
        id: 2,
      nombre: 'Margarita ',
      apellido: 'Perez Gonzalez',
      email: 'mpg@ciisa.cl',
      telefono:'+56940427233',
      password: '123456',
      perfil: 'usuario',
      cursos: []
      }
    ];
  constructor(
    private loadingService: LoadingService) { }

  getUsuarios(): Observable<User[]> {this.loadingService.setIsLoading(true)
    return of(this.usuarios).pipe(delay(1000), finalize(() => this.loadingService.setIsLoading(false) ));
  }


  agregarUsuario(usuario: User) {this.loadingService.setIsLoading(true)
    usuario.id = this.obtenerNuevoId();
    this.usuarios = [...this.usuarios, usuario]
    return this.getUsuarios();
  }

  editarUsuario(editandoCursos: User) {this.loadingService.setIsLoading(true)
    console.log(editandoCursos)
    this.usuarios = this.usuarios.map(c => {
      console.log(c.id , editandoCursos.id)
      if(c.id === editandoCursos.id){
        return editandoCursos
      }
      return c
    })
    return this.getUsuarios();
  }

  buscarUsuario(id: number){this.loadingService.setIsLoading(true)
    const u = this.usuarios.find((el) => el.id == id);
    console.log({u});
    return of(u).pipe(
      delay(1000),
      finalize(() => this.loadingService.setIsLoading(false) )
    );
  }
  
  borrarUsuario(id: number){this.loadingService.setIsLoading(true)
    this.usuarios = this.usuarios.filter((el) => el.id != id);
    return this.getUsuarios();
  }

  private obtenerNuevoId(): number {
    const ids = this.usuarios.map(c => c.id);
    return ids.length > 0 ? Math.max(...ids) + 1 : 1;
  }
}
