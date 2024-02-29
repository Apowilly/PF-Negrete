import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../layouts/authregistro/services/auth.service';
import { Store } from '@ngrx/store';
import { selectPerfil } from '../store/usuario/selectors';
import { map } from 'rxjs';

export const adminGuard: CanActivateFn = (route, state) => {
const router = inject(Router);
  const store = inject(Store);

  return store.select(selectPerfil).pipe(
    map( (m) =>  {
      console.log('guadAmin', m)
      return m == 'administrador' ? true : router.createUrlTree(['dashboard', 'home']);
    })
  )

/*    return authService.authUser?.perfil === 'administrador'
     ? true
     : router.createUrlTree(['dashboard', 'home']);
 */

     

};
