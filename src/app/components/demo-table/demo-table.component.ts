import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/models/curso';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-demo-table',
  templateUrl: './demo-table.component.html',
  styleUrls: ['./demo-table.component.css']
})
export class DemoTableComponent implements OnInit {
  cursos: Curso[] = [
    {
      nombre: 'Angular',
      comision: '32310',
      profesor: 'Pepe',
      fechaInicio: new Date(2022, 0, 1),
      fechaFin: new Date(2022, 1, 28),
      inscripcionAbierta: true,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    },
    {
      nombre: 'Angular',
      comision: '32320',
      profesor: 'Giancarlo',
      fechaInicio: new Date(2022, 2, 1),
      fechaFin: new Date(2022, 3, 20),
      inscripcionAbierta: true,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    },
    {
      nombre: 'ReactJs',
      comision: '33310',
      profesor: 'Maria',
      fechaInicio: new Date(2022, 1, 1),
      fechaFin: new Date(2022, 4, 28),
      inscripcionAbierta: false,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    },
    {
      nombre: 'VueJs',
      comision: '34310',
      profesor: 'Jorge',
      fechaInicio: new Date(2022, 5, 1),
      fechaFin: new Date(2022, 6, 30),
      inscripcionAbierta: false,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    }
  ];
  columnas: string[] = ['nombre', 'comision', 'profesor', 'fechaInicio', 'fechaFin', 'inscripcionAbierta', 'acciones'];
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos);

  alumnos: Alumno[] = [
    {
      nombre: 'Mario',
      apellido: 'Perez',
      comision: '11111',
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    },
    {
      nombre: 'Carlos',
      apellido: 'Perez',
      comision: '12222',
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    },
    {
      nombre: 'Marta',
      apellido: 'Perez',
      comision: '55555',
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    },

  ];
  columnas2: string[] = ['nombre','apellido','comision','acciones2'];
  dataSource2: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.alumnos);

  constructor() { }

  ngOnInit(): void {
  }

  filtrarCurso(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorObtenido.trim().toLowerCase();
    this.dataSource.filterPredicate = function(curso: Curso, filtro: string){
      return curso.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase());
    };
    this.dataSource.filter = valorObtenido.trim().toLowerCase();
  }

  filtrarComision(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorObtenido.trim().toLowerCase();
    this.dataSource.filterPredicate = function(curso: Curso, filtro: string){
      return curso.comision.toLocaleLowerCase().includes(filtro.toLocaleLowerCase());
    };
    this.dataSource.filter = valorObtenido.trim().toLowerCase();

  }

  filtrarNombre(event2: Event){
    const valorObtenido = (event2.target as HTMLInputElement).value;
    this.dataSource2.filter = valorObtenido.trim().toLowerCase();
    this.dataSource2.filterPredicate = function(alumno: Alumno, filtro: string){
      return alumno.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase());
    };
    this.dataSource2.filter = valorObtenido.trim().toLowerCase();
  }

  filtrarComision2(event2: Event){
    const valorObtenido = (event2.target as HTMLInputElement).value;
    this.dataSource2.filter = valorObtenido.trim().toLowerCase();
    this.dataSource2.filterPredicate = function(alumno: Alumno, filtro: string){
      return alumno.comision.toLocaleLowerCase().includes(filtro.toLocaleLowerCase());
    };
    this.dataSource2.filter = valorObtenido.trim().toLowerCase();

  }

  editar(){
    console.log(this.cursos);
  }

  editar2(){
    console.log(this.alumnos);
  }

}
