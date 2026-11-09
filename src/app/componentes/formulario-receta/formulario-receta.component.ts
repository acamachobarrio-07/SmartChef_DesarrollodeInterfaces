import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-receta',
  templateUrl: './formulario-receta.component.html',
  styleUrls: ['./formulario-receta.component.scss'],
  imports: [FormsModule]
})
export class FormularioRecetaComponent {

  // Indica si el formulario es para añadir o modificar
  modo = input<'anadir' | 'modificar'>('anadir');

  // Avisamos a la página padre cuando se pulsa Guardar
  guardar = output<void>();

  // Avisamos a la página padre cuando se pulsa Cerrar
  cerrar = output<void>();

  // INGREDIENTES
  ingredientesReceta: {
    nombre: string;
    cantidad: number | null;
    unidad: string;
  }[] = [];

  // PASOS DE PREPARACIÓN
  pasos: {
    descripcion: string;
  }[] = [];

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

}
