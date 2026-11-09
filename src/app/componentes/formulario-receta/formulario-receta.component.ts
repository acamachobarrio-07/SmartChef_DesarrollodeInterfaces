import { Component, input, output, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';

// DATOS QUE UTILIZARÁ EL FORMULARIO
export interface DatosFormularioReceta {
  titulo: string;
  tiempo: number | null;
  raciones: number | null;
  dificultad: string;

  ingredientes: {
    nombre: string;
    cantidad: number | null;
    unidad: string;
  }[];

  pasos: {
    descripcion: string;
  }[];
}

@Component({
  selector: 'app-formulario-receta',
  templateUrl: './formulario-receta.component.html',
  styleUrls: ['./formulario-receta.component.scss'],
  imports: [FormsModule]
})
export class FormularioRecetaComponent {

  // MODO DEL FORMULARIO
  modo = input<'anadir' | 'modificar'>('anadir');

  // RECETA QUE QUEREMOS MODIFICAR
  receta = input<DatosFormularioReceta | null>(null);

  // EVENTOS PARA COMUNICARNOS CON LA PÁGINA PADRE
  guardar = output<DatosFormularioReceta>();
  cerrar = output<void>();

  // CAMPOS GENERALES
  titulo = '';
  tiempo: number | null = null;
  raciones: number | null = null;
  dificultad = '';

  // INGREDIENTES
  ingredientesReceta: DatosFormularioReceta['ingredientes'] = [];

  // PASOS
  pasos: DatosFormularioReceta['pasos'] = [];

  constructor() {

    // RELLENAR EL FORMULARIO SI RECIBIMOS UNA RECETA
    effect(() => {
      const datos = this.receta();

      if (datos) {
        this.titulo = datos.titulo;
        this.tiempo = datos.tiempo;
        this.raciones = datos.raciones;
        this.dificultad = datos.dificultad;

        this.ingredientesReceta = datos.ingredientes.map(
          ingrediente => ({ ...ingrediente })
        );

        this.pasos = datos.pasos.map(
          paso => ({ ...paso })
        );
      }
    });

  }

  // AÑADIR INGREDIENTE
  anadirIngrediente(): void {
    this.ingredientesReceta.push({
      nombre: '',
      cantidad: null,
      unidad: 'ud'
    });
  }

  // ELIMINAR INGREDIENTE
  eliminarIngrediente(indice: number): void {
    this.ingredientesReceta.splice(indice, 1);
  }

  // AÑADIR PASO
  anadirPaso(): void {
    this.pasos.push({
      descripcion: ''
    });
  }

  // ELIMINAR PASO
  eliminarPaso(indice: number): void {
    this.pasos.splice(indice, 1);
  }

  // ENVIAR LOS DATOS A LA PÁGINA PADRE
  guardarFormulario(): void {
    this.guardar.emit({
      titulo: this.titulo,
      tiempo: this.tiempo,
      raciones: this.raciones,
      dificultad: this.dificultad,
      ingredientes: this.ingredientesReceta.map(
        ingrediente => ({ ...ingrediente })
      ),
      pasos: this.pasos.map(
        paso => ({ ...paso })
      )
    });
  }

}
