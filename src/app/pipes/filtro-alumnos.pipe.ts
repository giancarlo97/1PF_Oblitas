import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from '../models/alumno';

@Pipe({
  name: 'filtroAlumnos'
})
export class FiltroAlumnosPipe implements PipeTransform {

  transform(alumnos: Alumno[], filtro2: string): Alumno[] {
    return alumnos.filter(alumno => alumno.nombre.toLocaleLowerCase().includes(filtro2.toLocaleLowerCase()) || alumno.comision.includes(filtro2));
  }
 
}
