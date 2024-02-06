import { Component } from '@angular/core';
import { User } from './models';
import { LoadingService } from '../../../../core/services/loading.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
 
    displayedColumns: string[] = ['id', 'nombre','email','telefono','perfil','password','borrarUsuario','editarUsuario','verusuario'];
    dataSource: User[]= [];

    usuarioEnEdicion: boolean = false

    usuarioEditando? : User;

    constructor(
      private loadingService: LoadingService, private userService: UserService) { }

      
  ngOnInit(): void {
    this.userService.getUsuarios().subscribe({ 
      next: (u) => this.dataSource = u
    })
  }
  
    onUserSubmitted(ev:User): void{
      //validamos si editamos o creamos
      if (this.usuarioEnEdicion) {
        console.log("editando..." , ev.id)
        this.userService.editarUsuario(ev).subscribe({ 
          next: (u) => this.dataSource = u
        })
        this.usuarioEnEdicion = false;
      } else {
        //this.dataSource = [... this.dataSource,{...ev,id: new Date().getTime()}]; 
        this.userService.agregarUsuario({...ev,id: new Date().getTime()}).subscribe({ 
          next: (u) => this.dataSource = u
        })
      }
    }
   
    borrarUsuario(id: number): void {
      //this.dataSource = this.dataSource.filter(user => user.id !== id);
      this.userService.borrarUsuario(id).subscribe({ 
        next: (u) => this.dataSource = u
      })
    }

    editarUsuario(id: number): void {
      const usuarioAEditar = this.dataSource.find(user => user.id === id);
    
      if (usuarioAEditar) {
        // Utiliza una variable diferente para almacenar el usuario a editar
        this.usuarioEditando = usuarioAEditar;
        console.log('Usuario a editar:', this.usuarioEditando);
        this.usuarioEnEdicion = true

      } else {
        console.error('No se encontró el usuario con ID:', id);
      }
    }
    
    
    
  }
  



