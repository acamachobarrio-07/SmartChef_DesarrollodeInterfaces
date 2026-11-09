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

  // Avisamos a la página padre cuando pulsa Aceptar
  aceptar = output<void>();

}
