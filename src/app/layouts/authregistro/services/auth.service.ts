import { Injectable } from '@angular/core';
import { User } from '../../dashboard/pages/user/models';
import { Router } from '@angular/router';
import { delay, finalize, map, of, tap } from 'rxjs';
import { LoadingService } from '../../../core/services/loading.service';
import { UserService } from '../../dashboard/pages/user/services/user.service';
import { Store } from '@ngrx/store';
import { usuarioActions } from '../../../core/store/usuario/actions';

interface LoginData {
  email:  string;
  password:  string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

authUser: User | null = null

  constructor(private router: Router, 
    private Loading: LoadingService,  
    private usuario: UserService,
    private store: Store,
    ){

  }

  private setAuthUser(user: User): void {
    this.authUser = user;
    this.store.dispatch(usuarioActions.usuario(user))
    localStorage.setItem('token', user.email);
  }

  login(data: LoginData) { 
    return this.usuario.verificarUsuario(data.email, data.password).subscribe({
      next: (response) => {
        console.log("Resp",!!response[0])
          if (!!response[0]) {
            this.setAuthUser(response[0]);
            this.router.navigate(['dashboard', 'home']);
          } else {
            console.log('Email o password invalidos');
          }
      }
    });
  }

  logout(): void {
    this.router.navigate(['auth', 'login']);
    localStorage.removeItem('token');
  }

  verifyToken(){
    this.Loading.setIsLoading(true);
    console.log(localStorage.getItem('token'));
    
    this.usuario.verificarEmail(localStorage.getItem('token') ?? '').subscribe({
      next: (response) => {
        console.log("verifyToken",!!response[0])
        if (!!response[0]) {
          this.setAuthUser(response[0]);
        } 
      }
    });

    return of(this.usuario).pipe(delay(1000))
  }  
}

/* 
  login(data:LoginData): void{
    const MOCK_USER = {
      id: 48,
      email: 'william@test.cl',
      nombre: 'william',
      apellido: 'negrete',
      password: '123',
      perfil: 'administrador',
      telefono: '23455454'
    };
    if (data.email === MOCK_USER.email && data.password === MOCK_USER.password) {
      this.authUser =  MOCK_USER;
      localStorage.setItem('token', '1234567890asdffffrrr33333');
      this.router.navigate(['dashboard', 'home']);
    } else {
      alert('Email o password invalidos');
    }

    this.router.navigate(['dashboard','home']);
  }

  logout(): void {
    this.authUser = null;
    this.router.navigate(['auth', 'login']);
    localStorage.removeItem('token');
  }

  

*/