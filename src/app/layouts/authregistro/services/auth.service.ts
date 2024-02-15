import { Injectable } from '@angular/core';
import { User } from '../../dashboard/pages/user/models';
import { Router } from '@angular/router';
import { delay, finalize, map, of } from 'rxjs';
import { LoadingService } from '../../../core/services/loading.service';

interface LoginData {
  email: null | string;
  password: null | string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

authUser: User | null = null

constructor(private router: Router, private Loading: LoadingService){

}

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

  verifyToken(){
    this.Loading.setIsLoading(true);
    return of(localStorage.getItem('token')).pipe(delay(1000), map((response) => !! response),
    finalize(() => this.Loading.setIsLoading(false))
    );
  }  
  }
