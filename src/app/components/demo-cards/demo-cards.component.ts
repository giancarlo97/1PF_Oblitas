import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-demo-cards',
  templateUrl: './demo-cards.component.html',
  styleUrls: ['./demo-cards.component.css']
})
export class DemoCardsComponent implements OnInit {
  filtro: string = '';
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

  filtro2: string ='';
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
  constructor() { }

  ngOnInit(): void {
  }
}
