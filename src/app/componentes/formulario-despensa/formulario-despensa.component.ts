import { Component, OnInit, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Ingrediente } from '../../modelos/ingrediente';
import { ProductoDespensa } from '../../modelos/despensa';

@Component({
  selector: 'app-formulario-despensa',
  templateUrl: './formulario-despensa.component.html',
  styleUrls: ['./formulario-despensa.component.scss'],
  imports: [FormsModule]
})
export class FormularioDespensaComponent implements OnInit {

  // Producto que se modifica (si es null, estamos añadiendo uno nuevo)
  producto = input<ProductoDespensa | null>(null);

  // Ingredientes del catálogo que se pueden añadir
  ingredientes = input<Ingrediente[]>([]);

  // Avisamos a la página padre
  guardar = output<ProductoDespensa>();
  cerrar = output<void>();

  // Campos del formulario
  ingredienteId: number | null = null;
  cantidad: number | null = null;
  caducidad = '';

  unidades = {
    GRAMOS: 'gramos',
    MILILITROS: 'mililitros',
    UNIDADES: 'unidades'
  };

  // Al abrir el formulario para modificar, rellenamos los campos
  ngOnInit(): void {
    const producto = this.producto();

    if (producto) {
      this.ingredienteId = producto.ingrediente.id;
      this.cantidad = producto.cantidad;
      this.caducidad = producto.caducidad;
    }
  }

  // Ingrediente elegido en el formulario
  get ingredienteSeleccionado(): Ingrediente | undefined {
    const producto = this.producto();

    if (producto) {
      return producto.ingrediente;
    }

    return this.ingredientes().find(i => i.id === this.ingredienteId);
  }

  // El botón Guardar solo se activa si todo está relleno
  get formularioValido(): boolean {
    return this.ingredienteSeleccionado !== undefined &&
      this.cantidad !== null &&
      this.cantidad > 0 &&
      this.caducidad !== '';
  }

  enviar(): void {
    const ingrediente = this.ingredienteSeleccionado;

    if (ingrediente && this.cantidad && this.cantidad > 0 && this.caducidad) {
      this.guardar.emit({
        ingrediente: ingrediente,
        cantidad: this.cantidad,
        caducidad: this.caducidad
      });
    }
  }

}
