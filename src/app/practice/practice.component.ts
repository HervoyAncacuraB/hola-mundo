import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.css'
})
export class PracticeComponent {
  saludo = '';
  operandoA: number = 0;
  operandoB: number = 0;
  resultado: number = 0;

  sumar() {
    this.resultado = this.operandoA + this.operandoB;
  }

  limpiar() {
    this.operandoA = 0;
    this.operandoB = 0;
    this.resultado = 0;
  }

  isAutenticado: boolean = false;

  alternarAutenticacion() {
    this.isAutenticado = !this.isAutenticado;
  }

  //definir arreglo en Angular
  tareas: string[]  = [
    'Aprender Angular',
    'Desarrollar una app',
    'Aprender TypeScript'
  ];

  agregarTarea(nuevaTarea: string): void{
    if(nuevaTarea){
      this.tareas.push(nuevaTarea);
    }
  }

}
