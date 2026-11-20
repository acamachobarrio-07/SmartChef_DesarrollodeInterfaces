import { Component, input } from '@angular/core';

@Component({
  selector: 'app-confirmacion-receta',
  templateUrl: './confirmacion-receta.component.html',
  styleUrls: ['./confirmacion-receta.component.scss'],
  imports: [],
})
export class ConfirmacionRecetaComponent {

  // lo recibimos desde la página padre
  mensaje = input.required<string>();

  // opcional: si la página no lo pasa, se usa este
  titulo = input<string>('¡Operación realizada!');

}
