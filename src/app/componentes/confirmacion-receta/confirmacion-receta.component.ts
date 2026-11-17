import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-confirmacion-receta',
  templateUrl: './confirmacion-receta.component.html',
  styleUrls: ['./confirmacion-receta.component.scss'],
  imports: [],
})
export class ConfirmacionRecetaComponent {

  // Mensaje que recibimos desde la página padre
  mensaje = input.required<string>();

  // Textos opcionales: si la página no los pasa, se usan estos
  titulo = input<string>('¡Operación realizada!');
  textoBoton = input<string>('Aceptar');

  // Avisamos a la página padre cuando pulsa el botón
  aceptar = output<void>();

}
