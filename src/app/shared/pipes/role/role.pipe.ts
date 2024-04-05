import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {

  transform(value?: string | number): string {
    if(value == 0) return 'SuperAdmin';
    else return value === 1 ? 'Admin' : 'Driver';
  }
}
