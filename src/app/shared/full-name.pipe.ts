import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../layouts/dashboard/pages/user/models';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: User, ...args: unknown[]): unknown {
    return value.nombre + '  ' +value.apellido ;
  }

}
