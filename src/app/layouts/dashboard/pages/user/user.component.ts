import { Component } from '@angular/core';
import { User } from './models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
 
    displayedColumns: string[] = ['id', 'nombre','email','telefono','perfil','password','borrarUsuario','editarUsuario'];
    dataSource: User[]= [

      {
        id: 1,
      nombre: 'Juan Pedro',
      apellido: 'Torres Gonzalez',
      email: 'jpg@ciisa.cl',
      telefono:'+56940427333',
      password: '12345',
      perfil: 'administrador',
    
      
      },
      {
        id: 2,
      nombre: 'Margarita ',
      apellido: 'Perez Gonzalez',
      email: 'mpg@ciisa.cl',
      telefono:'+56940427233',
      password: '123456',
      perfil: 'usuario',
      
      }

     

    ];

    usuarioEnEdicion: boolean = false

    usuarioEditando? : User;
  
    onUserSubmitted(ev:User): void{
      //validamos si editamos o creamos
      if (this.usuarioEnEdicion) {
        console.log("editando..." , ev.id)
        this.dataSource =  this.dataSource.map(m=> {
            if (m.id === ev.id) {
              return ev
            }
            return m
        });
        this.usuarioEnEdicion = false;
      } else {
        this.dataSource = [... this.dataSource,{...ev,id: new Date().getTime()}]; 
      }
    }
   
    borrarUsuario(id: number): void {
      this.dataSource = this.dataSource.filter(user => user.id !== id);
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
  



