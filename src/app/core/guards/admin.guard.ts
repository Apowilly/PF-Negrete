import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../layouts/authregistro/services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
const router = inject(Router);
  const authService = inject(AuthService);
   return authService.authUser?.perfil === 'administrador'
     ? true
     : router.createUrlTree(['dashboard', 'home']);


     

};
